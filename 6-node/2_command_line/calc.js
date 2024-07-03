const suma = (op1, op2) => {
    return op1 + op2
}

if (process.argv.length < 4) {
    console.log('¡¡Error!! Falta parámetros')
    process.exit()
}

const primerSumando = parseFloat(process.argv[2])
const segundoSumando = parseFloat(process.argv[3])

if (isNaN(primerSumando) || isNaN(segundoSumando)) {
    console.log('¡¡Error!! Todos los argumentos deben ser números')
    process.exit()
}

console.log('La suma es: ', suma(primerSumando, segundoSumando))
