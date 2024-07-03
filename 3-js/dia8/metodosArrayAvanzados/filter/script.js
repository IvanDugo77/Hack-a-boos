"use strict";
let numeros = [4, 8, 2, 9, 15];
let animales = ["conejo", "perro", "gato"];
let usuarios = [
  {
    nombre: "Zoe",
    edad: 28,
  },
  {
    nombre: "Pepe",
    edad: 35,
  },
  {
    nombre: "Ana",
    edad: 8,
  },
  {
    nombre: "Marcos",
    edad: 13,
  },
  {
    nombre: "María",
    edad: 19,
  },
];

//FILTER
//Filter devuleve un nuevo array con los mismos elementos del original o menos
//Si el callback devuelve true, el elemento estará en el nuevo array. Si no, no

function esPar(num) {
  return num % 2 === 0;
}

let pares = numeros.filter(esPar);

console.log(pares);

let impares = numeros.filter((num) => !esPar(num));
console.log(impares);

///////////

function filterAdults(usuario) {
  return usuario.edad >= 18;
}

let adultos = usuarios.filter(filterAdults);

console.log(adultos);

let adultos2 = usuarios.filter((usuario) => usuario.edad >= 18);

console.log(adultos2);

function isAdult(age) {
  return age >= 18;
}

let adultos3 = usuarios.filter((usuario) => isAdult(usuario.edad));

console.log(adultos3);

let nombresAdultos = adultos.map((adulto) => adulto.nombre);

console.log(nombresAdultos);

console.log(
  usuarios
    .filter((usuario) => usuario.edad >= 18)
    .map((usuario) => usuario.nombre)
);

////////////////////////
//¿Como funciona filter?

function myFilter(callback, array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i)) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

let pares2 = myFilter(esPar, numeros);

console.log(pares2);
