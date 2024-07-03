/**
 * Aplicación que permita gestionar una lista de tareas
 * 
 * Uso: 
 *     node index.js --add "descripción de la tarea"
 *     node index.js --done <id de la tarea>
 *     node index.js --list
 */

const { Command } = require('commander');
const fs = require('fs').promises

const program = new Command();

const getLastId = async () => {
    const tasks = await fs.readFile('./tasks.txt', 'utf8')

    const lastLine = tasks
        .split('\n')
        .filter(line => line.trim().length !== 0)
        .slice(-1)

    if (lastLine.length === 0) {
        return 0
    }

    const lastId = parseInt(lastLine[0].split(' ')[0])

    return lastId
}

const addTask = async (taskText) => {
    // <id> <estado> <texto>
    const lastId = await getLastId()
    const taskLine = `${lastId + 1} PENDING ${taskText}`
    await fs.appendFile('./tasks.txt', taskLine+'\n')
}

const listTasks = async () => {
    const tasks = await fs.readFile('./tasks.txt', 'utf8')

    console.log(tasks)
}

const markAsDone = async (taskId) => {
    const tasksInText = await fs.readFile('./tasks.txt', 'utf8')

    const listOfTasks = tasksInText
        .split('\n')
        .map( line => line.split(' '))

    for (let task of listOfTasks) {
        if (task[0] === taskId) {
            task[1] = 'DONE'
            break
        }
    }

    updatedTasks = listOfTasks.map(line => line.join(' '))

    fs.writeFile('./tasks.txt', updatedTasks.join('\n'))
}

program
    .option('--add <char>', 'descripción de la tarea')
    .option('--done <number>', 'marcar una tarea como terminada')
    .option('--list', 'listar las tareas pendientes')

program.parse(process.argv);

const options = program.opts();

if (options.add !== undefined) {
    addTask(options.add)
} else if (options.list !== undefined) {
    listTasks()
} else if (options.done !== undefined) {
    markAsDone(options.done)
}

