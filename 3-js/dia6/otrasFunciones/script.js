"use strict";

nombreDeclaracion(); //aqui funciona

function nombreDeclaracion(parametros) {
  //logica

  console.log("esto es una declaración de función");

  return "opcional";
}

/////////////////////////
// EXPRESIÓN DE FUNCIÓN

//expresion(); //aqui da error

let expresion = function (parametros) {
  //logica

  console.log("Esto es una expresión de función");

  return "opcional";
};

expresion();

//
/////////////////////
//ARROW FUNCTION (función flecha)
/* (parametros) => {
  //logica

  return "opcional"
 } */

// (parametros) => resultado //si no ponemos llaves, tiene return implicito

let arrowFunction = (parametros) => console.log("Esto es una arrow function");
arrowFunction();

let sumar = (a, b) => a + b;
let sumar15 = (num) => num + 15;

console.log(sumar(2, 5));

//Sumar con declaracion de funcion

function sumar2(a, b) {
  return a + b;
}

//////////

function calcular(operacion, numA, numB) {
  return operacion(numA, numB);
}

console.log(calcular(sumar, 2, 3));
console.log(calcular(sumar2, 2, 3));

console.log(calcular((a, b) => a - b, 5, 2));
