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
    mascota: "perro",
  },
  {
    nombre: "Ana",
    edad: 8,
  },
  {
    nombre: "Marcos",
    edad: 13,
    mascota: "gato",
  },
  {
    nombre: "María",
    edad: 19,
  },
];

//EVERY
//Devuelve true si el callback devuelve true para TODOS los elementos

console.log(numeros.every((num) => num % 2 === 0)); //¿Todos son pares? false

console.log(animales.every((animal) => animal.length > 3)); //¿Tiene mas de 3 letras? true

console.log(usuarios.every((usuario) => usuario.mascota)); //¿Todos tienen mascota? false

console.log(usuarios.every((usuario) => usuario.edad > 5)); //¿tienen mas de 5 años? true

///////////////////////////////
//¿Como funciona every?

function myEvery(callback, array) {
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i], i)) {
      return false;
    }
  }

  return true;
}

console.log(myEvery((num) => num % 2 === 0, numeros));

console.log(myEvery((animal) => animal.length > 3, animales));
