const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { getConnection } = require("../db");

const register = async (req, res) => {
    // 1.- obtener los datos del usuario
    // (username, password, <cualquier otro>)
    const email = req.body.email
    const password = req.body.password

    const name = req.body.name
    const year = req.body.year
    const surname = req.body.surname
    const gender = req.body.gender


    if (name === undefined || 
        year === undefined || 
        surname === undefined || 
        gender === undefined ||
        email === undefined ||
        password === undefined) {
        // [joi] schema.validate(req.body)  --> con joi para validaciones complejas

        res.status(400).send()
        return
    }

    // 2.- cifrar la password antes de meterla en la bbdd
    const cryptPassword = await bcrypt.hash(password, 10)

    console.log('Password cifrada: ', cryptPassword)

    // 3.- meter email y password cifrada en la bbdd
    let connection;

    try {
        connection = await getConnection();

        await connection.query(`
            insert into Users (email, password, name, surname, year, gender) 
            values ("${email}", "${cryptPassword}", "${name}", "${surname}", ${year}, "${gender}");`)

        res.send()
    } catch (err) {
        console.log('ERROR: ', err)
        res.status(500).send()
    } finally {
        if (connection) {
            connection.release()
        }
    }

}

const login = async (req, res) => {
    // 1.- obtener parámetro del body (email, password)
    const { email } = req.body
    const { password } = req.body

    // 2.- comprobar que email y password son correctos
    // select * from Users where email = <email del body>
    let connection;

    try {
        connection = await getConnection();

        const [ user ] = await connection.query(`select * from Users where email="${email}"`)

        // compruebo que la consulta me devuelve algún user. Si no es así, es que el email
        // introducido no existe, así que el login falla
        if (user.length === 0) {
            res.status(403).send()
            console.log('Unknown email...')
            return
        }

        // tengo que comparar la password que me pasan (variable password), con la que tengo
        // almacenada en la bbdd (user.password)
        // Si la función compare me da `true` significa que la comparación es correcta
        const passwordsEqual = await bcrypt.compare(password, user[0].password)

        if (!passwordsEqual) {
            res.status(403).send()
            console.log('Incorrect password...')
            return
        }

        // 3.- generar un token
        const jsonToken = {
            email: email,
            role: user[0].role
        }

        const token = jwt.sign(jsonToken, process.env.JWT_SECRET);

        res.json(token).send()
    } catch (err) {
        console.log('ERROR: ', err)
        res.status(500).send()
    } finally {
        if (connection) {
            connection.release()
        }
    }

}

module.exports = {
    login,
    register
}