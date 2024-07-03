const { Command } = require('commander');

const suma = (op1, op2) => {
    return op1 + op2
}
/*
function suma(op1, op2) {
    return op1 + op2
}
*/

const program = new Command();

program
    .option('--operation <char>', 'la operación a realizar','suma')
    .requiredOption('--op1 <number>', 'primer operando')
    .requiredOption('--op2 <number>', 'segundo operando')

program.parse(process.argv);

const options = program.opts();

let resultado;

if (options.operation === 'suma') {
    resultado = suma(parseFloat(options.op1), parseFloat(options.op2))
} else if (options.operation === 'resta') {
    // resultado = resta(...)
}


console.log(resultado)


