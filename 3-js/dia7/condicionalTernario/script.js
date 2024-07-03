"use strict";

/* 
if(condicion){
  logica
} else {
  logica
}
*/

//CONDICIONAL TERNARIO
// condicion ? "resultado true" : "resultado false"

let edad = 20;

console.log(edad >= 18 ? "mayor" : "menor");

console.log(`Fulanito es ${edad >= 18 ? "mayor" : "menor"} de edad`);

function checkAge(edad) {
  return edad >= 18 ? "mayor" : "menor";
}

////////////////
let a = false;

//esto:
let resultado;

if (a) {
  resultado = "b";
} else {
  resultado = "c";
}

console.log(resultado);

//es lo mismo que esto:
console.log(a ? "b" : "c");
