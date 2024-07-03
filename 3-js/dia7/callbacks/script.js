"use strict";

//CALLBACKS
// Un callback es una función que se pasa como argumento de otra
//Será este otra funcion la encargada de ejecutar el callback

function suma(numA, numB) {
  return numA + numB;
}

suma(3, 4); //llamada
suma; //funcion

console.log(suma(3, 4)); //llamada a la funcion
console.log(suma); //funcion

//Función que recibe un callback
function calcular4y8(operacion) {
  return operacion(4, 8);
}

//Si le paso como callback algo que no sea una funcion, da error
//console.log(calcular("restar", 8, 4));

console.log(calcular4y8(suma));

const resta = (a, b) => a - b;

console.log(calcular4y8(resta));

console.log(calcular4y8((a, b) => a * b));

////////////////

function test(callback) {
  return callback("Zoe", 28);
}

let repetir = (str, num) => str.repeat(num);

console.log(test(repetir));

let checkAge = (name, age) => {
  if (age >= 18) {
    return `${name} es mayor`;
  } else {
    return `${name} es menor`;
  }
};

console.log(test(checkAge));

console.log(test(suma));
console.log(test(resta));
