const express = require('express')
const cors = require('cors')

const app = express()

const controllers = require('./controllers')

// middleware para CORS
app.use(cors())

/*
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'localhost:5500')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()

})*/

app.use(function (req, res, next) {
    console.log('Llega petición!!')
    next()
})

const isAuthenticated = (req, res, next) => {
    console.log('Comprobando si estoy autenticado')

    const authenticated = false // TODO: implementar autenticación

    if (!authenticated) {
        res.status(401).send('no estás autenticado')
    } else {
        next()
    }
}

// definir los distintos endpoints
// cada endpoint define una ruta y un controlador
app.get('/docs/api', controllers.get_api_doc)

app.get('/docs/private', isAuthenticated, controllers.get_private_doc)
app.get('/miperfil', isAuthenticated, controllers.get_private_doc)

app.get('/docs/:type', controllers.get_docs_by_type)


app.get('/', controllers.get_main_doc)

app.listen(8888)
