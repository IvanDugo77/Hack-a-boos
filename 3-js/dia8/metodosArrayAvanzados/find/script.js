"use strict";
let numeros = [4, 8, 2, 9, 15];
let animales = ["conejo", "perro", "gato"];
let usuarios = [
  {
    id: 0,
    nombre: "Zoe",
    edad: 28,
  },
  {
    id: 1,
    nombre: "Pepe",
    edad: 35,
    mascota: "perro",
  },
  {
    id: 2,
    nombre: "Ana",
    edad: 8,
  },
  {
    id: 3,
    nombre: "Marcos",
    edad: 13,
    mascota: "gato",
  },
  {
    id: 4,
    nombre: "María",
    edad: 19,
  },
];

//FIND
//Devuelve un elemento del array: el primero que devuelva true en el callback

let primerPar = numeros.find((num) => num % 2 === 0);
console.log(primerPar);

let primerImpar = numeros.find((num) => num % 2 !== 0);

console.log(primerImpar);

console.log(animales.find((animal) => animal[0] === "p"));

console.log(usuarios.find((usuario) => usuario.id === 3));

////////////////////
//¿Como funciona find?

function myFind(callback, array) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i)) {
      return array[i];
    }
  }
}

console.log(myFind((usuario) => usuario.id === 3, usuarios));
