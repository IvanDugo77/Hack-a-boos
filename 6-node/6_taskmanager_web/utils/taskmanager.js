const fs = require('fs').promises

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

const listTasks = async () => {
    const tasks = await fs.readFile('./tasks.txt-noexiste', 'utf8')

    return tasks
        .split('\n')
        .filter(line => line.length !== 0)
}

const addTask = async (taskText) => {
    // <id> <estado> <texto>
    const lastId = await getLastId()
    const taskLine = `${lastId + 1} PENDING ${taskText}`
    await fs.appendFile('./tasks.txt', taskLine + '\n')
}

const deleteTask = async (taskId) => {
    const tasks = (await listTasks()).map(task => task.split(' '))

    const foundTask = tasks.find(task => task[0] === taskId)

    if (foundTask) {
        const filteredTasks = tasks.filter(task => task[0] !== taskId)
        fs.writeFile('./tasks.txt', filteredTasks.join('\n'))
        return true
    } else {
        return false
    }
}

module.exports = {
    addTask,
    deleteTask,
    listTasks
}