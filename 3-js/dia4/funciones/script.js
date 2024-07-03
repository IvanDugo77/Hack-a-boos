"use strict";

//DECLARACIÓN DE FUNCIONES

saludar(); //con declaración de función, podemos invocarlas antes de crearlas

/* 
function nombre(parametro1, parametro2...){
  //código
}
*/

function saludar() {
  console.log("hola!");
  console.log("Buenos días!");
}

//LLAMADA A LA FUNCIÓN
/* 
nombre(argumento1, argumento2...)
*/

saludar();

saludar();

let hora = 13;

if (hora <= 12) {
  saludar();
}

console.log(saludar());

//DEVOLVER UN VALOR
/* 
function nombre(parametros){
  //codigo

  return valor

  //esto ya no se ejecuta
}
*/

function miNumeroFav() {
  console.log("esto se ejecuta en la funcion");

  return 2 + 2;

  console.log("esto no se ejecuta");
}

console.log(`Mi numero favorito es el ${miNumeroFav()}`);

if (miNumeroFav() < 5) {
  console.log("mi numero favorito es menor que 5");
} else {
  console.log("mi numero favorito es mayor o igual a 5");
}

//////////
//Las funciones deberían ser puras

//IMPURAS:
//Modifican datos de fuera y/o devuelven distintos datos con la misma entrada

let num = 2;

function duplicar() {
  num *= 2;
  return num;
}

console.log(duplicar());
console.log(num);
console.log(duplicar());

function aleatorio() {
  return Math.random();
}

console.log(aleatorio());
console.log(aleatorio());

function duplicar2() {
  num *= 2;
}

console.log(duplicar2());
console.log(num);
console.log(duplicar2());
console.log(num);

function aleatorioMulti(num) {
  return Math.random() * num;
}

console.log(aleatorioMulti(10));
console.log(aleatorioMulti(10));

// PURAS
//Misma entrada, misma salida
//No modifican nada de fuera

num = 2;

function duplicar3(a) {
  return a * 2;
}

console.log(duplicar3(num));
console.log(duplicar3(num));
console.log(duplicar3(2));

//Podemos llamar a funciones dentro de otras
function multiplicar(numA, numB) {
  return numA * numB;
}

function triplicar(num) {
  return multiplicar(num, 3);
}

console.log(triplicar(3));
console.log(triplicar(4));
