const fs = require('fs').promises

// fs.writeFile('./misdatos.txt', 'mi segunda cadena')

const addLine = async (texto) => {
    await fs.appendFile('./misdatos.txt', texto+'\n')
    const datos = await fs.readFile('./misdatos.txt', 'utf8')

    return datos
}

addLine('décima linea').then( (datos) => {
    console.log(datos)
    console.log('Hecho!!')
})


/*
fs.appendFile('./misdatos.txt', 'mi septima linea\n')
.then(() => {
    console.log('Terminó la escritura')

    return fs.readFile('./misdatos.txt', 'utf8')
})
.then( data => {
    console.log(data)
})
.catch((err) => {
    console.log('Hubo un error en la escritura: ', err)
})
*/

console.log('==== línea al final del fichero ====')