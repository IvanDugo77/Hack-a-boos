require("dotenv").config();

const express = require('express')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { response } = require('express');
const { listRaces , createRace, addParticipantToRace, listParticipantsFromRace} = require('./controllers/races');
const { listParticipants, createParticipant } = require('./controllers/participants');

const { login, register } = require('./controllers/users')
const { getConnection } = require("./db");

const app = express()


// Vamos a configurar un middleware para leer fácilmente
// las variables del body, que las usaremos en los endpoints 
// de tipo POST


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use((req, res, next) => {
    console.log('Este es un middleware que se ejecuta para todos los endpoints')

    next()
})

const pruebaMiddleware = (req, res, next) => {
    console.log('Este es un middleware específico')

    next()
}

const segundoMiddleware = (req, res, next) => {
    console.log('Texto del segundo middlware')

    res.status(401).send()
    // next()
}

const isSameUserOrAdmin = async (req, res, next) => {
    // comprobar que el usuario logueado es el usuario
    // que se intenta inscribir

    // cuál es el logueado?
    //    -- el middleware isAuthenticated debe dejar en "req", la información del usuario
    //    -- en req tenemos req.email <--- es el usuario logueado

    // cuál es el usuario que se intenta inscribir?
    //    -- req.body.id

    // hago query a bbdd para pedir toda la información del usuario logueado,
    // que lo conozco por el email. En esa información está el ID, que lo compararemos
    // con el que nos pasan en el body

    if (req.role === 'admin') {
        next()
        return
    } 

    let connection;

    try {
        connection = await getConnection();

        const [ user ] = await connection.query(`select id from Users where email="${req.email}"`)

        if (parseInt(req.body.id) !== user[0].id) {
            console.log('[isSameUser] [error] ',typeof(req.body.id), typeof(user[0].id))
            res.status(403).send()
            return
        }

        next()
    } catch (err) {
        console.log('ERROR: ', err)
        res.status(500).send()
    } finally {
        if (connection) {
            connection.release()
        }
    }

}


const isAdmin = (req, res, next) => {
    // este middleware comprueba que el role del usuario
    // es admin
    console.log(`[isAdmin] role: ${req.role}`)

    if (req.role === 'admin') {
        next()
    } else {
        res.status(401).send()
    }
}

const isAuthenticated = (req, res, next) => {
    // La responsabilidad de este middleware es comprobar
    // que el usuario actual está autenticado
    // ¿Cuál es el usuario actual? -> el correspondiente al token
    const token = req.headers.authorization

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        // creo el atributo "role" en "req" para que los siguiente middlewares
        // lo reciban. Ej.: el middleware isAdmin puede leer el role en req.role
        req.role = decodedToken.role 
        req.email = decodedToken.email

        console.log(`[isAuthenticated] ${req.email} authenticated ok`)
        next()

    } catch(e) {
        res.status(401).send()
        return
    }
}

app.get('/participants', listParticipants)

app.post('/participants', createParticipant)

app.get('/races', listRaces)

app.post('/races', isAuthenticated, isAdmin, createRace)

// inscribir al usuario en la carrera
// hace falta que quien haga la petición sea el mismo usuario
app.post('/races/:raceId/participant', isAuthenticated, isSameUserOrAdmin, addParticipantToRace)

// obtener la lista de participants inscritos en una carrera
app.get('/races/:raceId/participant', isAuthenticated, listParticipantsFromRace)

// crear un endpoint para indicar que el participante ha pagado
app.put('/races/:raceId/participant/:participantId/paid', isAuthenticated, isAdmin, (req, res) => {
    // espero que en el body me venga un campo paid=false|true
    const paid = req.body.paid
    const raceId = req.params.raceId
    const participantId = req.params.participantId

    // TODO: Hacer la query que actualizar el campo paid en la
    // tabla que relaciona Race y Participant

    res.send(200)
})


// Endpoints para la gestión de usuarios
// Registrar un usuario

app.post('/register', register)

app.post('/login', login)

app.get('/', function (req, res) {
    console.log('estoy en la función controllador de GET /')
    res.send('Hello World')
})

app.listen(5500)
