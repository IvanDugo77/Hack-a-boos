"use strict";

// Para saber de que tipo es un dato, usamos el operador typeof

// STRINGS (cadenas de texto)
// Van entre comillas simples ('') o dobles ("")
//Dentro podemos escribir lo que sea pero no aceptan saltos de linea*

let miString = "Hello world!";

console.log(miString);

//Podemos poner saltos de linea con la secuencia \n

let salto = "Hello\nworld!";

console.log(salto);

// Podemos meter comillas si no coinciden con las de fuera o con \

let comillas = 'Esto lleva "comillas" y un apostrofo \'';

console.log(comillas);

console.log(typeof comillas);

//////////////////////////////

// NUMBER

let numero = 4;
let negativo = -4;
let decimal = 4.4;

console.log(numero);
console.log(typeof numero);

//////////////////////////////

//BOOLEAN
// Si/no, verdadero/falso, 1/0
//En JS true/false

let miBooleano = true;

let miFalso = false;

console.log(miBooleano);
console.log(typeof miBooleano);

//////////////////////////////

// UNDEFINED
// No tiene valor definido.
//Por lo general, porque aun no lo conocemos

let aunNoSe;

console.log(aunNoSe);
console.log(typeof aunNoSe);

//NULL
//No tiene valor pero es a proposito

let sinValor = null;

console.log(sinValor);

console.log(typeof sinValor);
