const prompt = require('prompt-sync')();
//
// get input from the user.
//

while (true) {
    let name = prompt('Cómo te llamas?');
    let city = prompt('De dónde eres?');

    console.log(`Tu nombre es ${name}`)
    console.log(`Eres de: ${city}`)

    let ok = prompt('Es correcto?')

    if (ok === 'yes') {
        break
    }
}