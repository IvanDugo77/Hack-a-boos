"use strict";

let numeros = [4, 8, 2, 9, 15];

//MAP
// Devuelve un nuevo array con la misma cantidad de elementos que el original
// En cada posición habrá lo que devuelva el callback para el elemento correspondiente

function duplicar(num) {
  return num * 2;
}

const duplicados = numeros.map(duplicar);

console.log(duplicados);

const sonPares = numeros.map((num) => num % 2 === 0);

console.log(sonPares);

console.log(numeros.map((num) => "hola"));

//////

let animales = ["conejo", "perro", "gato"];

console.log(animales.map(duplicar));

//////////////

function customMap(callback, array) {
  let newArray = [];

  for (const el of array) {
    let resultadoCB = callback(el);
    newArray.push(resultadoCB);
  }

  return newArray;
}

console.log(customMap(duplicar, numeros));

////////////

/* 
//Al hacer esto:
const sonPares = numeros.map((num) => num % 2 === 0); */

//Pasa esto:

let sonPares2 = [];

for (const num of numeros) {
  let esPar = num % 2 === 0;
  sonPares2.push(esPar);
}

console.log(sonPares2);

//////////////////////////

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

function checkAge(user) {
  if (user.edad >= 18) {
    return "mayor";
  } else {
    return "menor";
  }
}

let edades = usuarios.map(checkAge);
console.log(edades);

//O lo que es lo mismo...

let edades2 = usuarios.map((usuario) =>
  usuario.edad >= 18 ? "mayor" : "menor"
);

console.log(edades2);

let nombres = usuarios.map((usuario) => usuario.nombre);

console.log(nombres);
