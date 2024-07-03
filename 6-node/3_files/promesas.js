/**
 * Función de ejemplo que **crea** una promesa
 * 
 */
const dameNumero5 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(5), 5000)
    })
}

const dameNumero2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(2), 2000)
    })
}

/*
// la ejecución de dameNumero5 y dameNumero2 es concurrente (paralela),
// por tanto no podemos asegurar cuál acaba antes. Como estamos usando
// "primerOperando" en el callback de dameNumero2, si dameNumero5 tarda más,
// será undefined

let primerOperando;
dameNumero5().then( data5 => {
    console.log('data5: ', data5)
    primerOperando = data5
})

dameNumero2().then( data2 => {
    console.log('la suma es: ', data2, primerOperando)
})
*/

/*
// Ejecución secuencial de promesas encadenando. Cada una espera por la anterior
dameNumero5().then( data5 => {

    dameNumero2().then( data2 => {
        console.log('la suma es: ',data2 + data5)
    })
})

*/

/*
let primerOperando;

dameNumero5()
.then( data5 => {
    // ...
    primerOperando = data5
    return dameNumero2()
})
.then( (data2) => {
    console.log('la suma es: ',data2 + primerOperando)
})

*/


/*
    // Ejecución secuencial de promesas usando el mecanismo async/await

const dameNumeros = async () => {
    const primerOperando = await dameNumero5()
    const segundoOperando = await dameNumero2()

    return [primerOperando, segundoOperando]
}

dameNumeros().then( ([op1, op2]) => {
    console.log('la suma es: ', op1 + op2)
})
*/


// ejecutar las promesas en paralelo. Promise.all se resuelve cuando
// todas las promesas del array estén listas
Promise.all([dameNumero5(), dameNumero2()]).then( data => {
    console.log('La suma es: ', data[0] + data[1])
})

console.log('=== final del fichero ====')

