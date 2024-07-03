"use strict";

// ARRAYS
// Estructura ordenada de elementos
//Dichos elementos pueden ser de cualquier tipo (incluso funciones , arrays y objetos)

let nombre = "Zoe";

let miArray = [
  "hola",
  27,
  true,
  null,
  nombre,
  ["rojo", "verde", "azul"],
  function () {
    console.log("Hi");
  },
];

console.log(miArray);

//El nombre de los elementos dentro del array es nombreArray[posicion]

console.log(miArray[1]);
console.log(miArray[4]);
console.log(miArray[5]);
console.log(miArray[5][1]);

let arrayRGB = miArray[5];

console.log(arrayRGB[1]);

console.log(miArray[6]);
miArray[6]();

/////////////////
console.log("");
//Cómo crear un array vacio

let miArrayVacio = Array();
console.log(miArrayVacio);

let miArrayVacio2 = [];
console.log(miArrayVacio2);

//Crear un array con huecos

let miArray3huecos = Array(3);
console.log(miArray3huecos);

let miArray3huecos2 = [, , ,];
console.log(miArray3huecos2);

//Crear un array con cosas

let miArrayConCosas = Array("rojo", "verde", undefined, "azul");
console.log(miArrayConCosas);

let miArrayConCosas2 = ["rojo", "verde", , "azul"];
console.log(miArrayConCosas2);

//Rellenar un array con huecos

miArray3huecos.fill("hola");
console.log(miArray3huecos);

////////////////////////////
console.log("");
//Cambiar una posición

miArrayConCosas[2] = "amarillo";

console.log(miArrayConCosas);
