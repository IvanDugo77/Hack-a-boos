const express = require('express')
const bodyParser = require('body-parser')
const jsonfile = require('jsonfile')

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const pathToFile = './data.json'

const listEvents = async (req, res) => {
    // leer el fichero data.json y devolver sus contenidos

    try {
        const contents = await jsonfile.readFile(pathToFile)
        res.json(contents).send()
    } catch (err) {
        res.status(500).send()
    }
}

const createEvent = async (req, res) => {
    const { name, date } = req.body

    if (name === undefined || date === undefined) {
        res.status(400).send()
        return
    }

    try {
        const contents = await jsonfile.readFile(pathToFile)

        contents.push({
            name,
            date
        })

        await jsonfile.writeFile(pathToFile, contents)
        res.status(201).send()
    } catch (err) {
        console.log(err)
        res.status(500).send()
    }
}

app.get('/events', listEvents)
app.post('/event', createEvent)

app.listen(9999)
