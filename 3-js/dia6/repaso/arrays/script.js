"use strict";

let colores = ["rojo", "verde"];

//Cuantos elementos tiene: LENGTH
console.log(colores.length);

//Meter al final: PUSH

colores.push("azul", "naranja");

console.log(colores);

//Meter al principio: UNSHIFT

colores.unshift("rosa", "amarillo");
console.log(colores);

//////////////
//Copia poco profunda

function copiar(arr) {
  let newArray = [];

  for (const el of arr) {
    newArray.push(el);
  }

  return newArray;
}

let copiaColores = copiar(colores);

console.log(copiaColores);

let copiaColores2 = [...colores];

console.log(copiaColores2);
