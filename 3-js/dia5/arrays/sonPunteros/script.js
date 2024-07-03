"use strict";

let str1 = "hola";
let str2 = "hola";

console.log(str1 === str2);

let str3 = str1;
str3 += "adios"; // str3 = str3 + "adios"
console.log(str3, str1);

//LOS ARRAYS SON PUNTEROS

let colores = ["rojo", "verde", "azul"];
//colores !== ["rojo", "verde", "azul"]
//colores === A32F45

let colores2 = ["rojo", "verde", "azul"];
//colores2 !== ["rojo", "verde", "azul"]
//colores2 === 15FB9

//No podemos comprarlos directamente

console.log(colores === colores2);
// A32F45 === 15FB9 -> false

///////

let colores3 = colores;
// colores3 === A32F45
//colores3 ocupa el mismo espacio fisico que colores
//Si modifico uno, cambian los dos

colores3.push("amarillo");
console.log(colores3);
console.log(colores);

/////////////////
// Clonar un array sin clonar el puntero (serán dos arrays con el mismo contenido, pero no el mismo array)

//Operador spread (...)

console.log(...colores);

let clonColores = [...colores];

clonColores.push("violeta");
console.log(clonColores);
console.log(colores);
