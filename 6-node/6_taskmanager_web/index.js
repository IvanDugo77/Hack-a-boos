const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')

const taskManager = require('./utils/taskmanager')

const app = express()

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const getTasks = async (req, res, next) => {
    try {
        const tasks = await taskManager.listTasks()
        res.json(tasks)
    } catch (err) {
        next(err)
    }
}

const getTaskDetail = async (req, res) => {
    const { id } = req.params

    // acceder al fichero para leer la info de esta tarea

    // devolver el error correspondiente, si lo hay:
    //      404 Not found
    //      500 Si hubo algún error 
    //      200 Devolvemos correctamente
}

const createTask = async (req, res, next) => {
    const { text } = req.body

    try {
        if (text === undefined) {
            const error = new Error('Missing mandatory argument')
            error.httpStatus = 400

            throw error
        }

        if (text.length < 3) {
            const error = new Error('Invalid text length')
            error.httpStatus = 400

            throw error
        }

        await taskManager.addTask(text)

        res.send('')
    } catch(err) {
        next(err)
    }
}

const deleteTask = async (req, res, next) => {
    const { id } = req.params

    try {
        const deleted = await taskManager.deleteTask(id)

        if (!deleted) {
            const error = new Error('Unknown task to delete')
            error.httpStatus = 404

            throw error
        } else {
            res.send()
        }
    } catch (err) {
        next(err)
    }
}

/*
    - listas tareas
    - crear tareas
    - cambiar estado
*/
app.get('/tasks', getTasks)
app.get('/tasks/:id', getTaskDetail)

app.post('/tasks', createTask)

app.delete('/tasks/:id', deleteTask)

app.use( (error, req, res, next) => {
    console.log(`[Error ${error.httpStatus}] - ${error.message}`)

    res.status(error.httpStatus || 500).send(error.message)
})

app.listen(8888)
