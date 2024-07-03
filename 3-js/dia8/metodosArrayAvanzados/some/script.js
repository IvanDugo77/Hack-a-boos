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

//SOME
//Devuelve true si el callback devuelve true para ALGÚN elemento

console.log(numeros.some((num) => num % 2 === 0)); //¿Alguno es par? true

console.log(numeros.some((num, i) => num === i)); //¿Alguno coincide con su indice? true

console.log(animales.some((animal) => animal === "serpiente")); //¿Alguno es serpiente? false

console.log(usuarios.some((usuario) => usuario.mascota)); //¿Alguno tiene mascota? true

//////////////////////
//¿Como funciona some?

function mySome(callback, array) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i)) {
      return true;
    }
  }

  return false;
}

console.log(mySome((num, i) => num === i, numeros)); //¿Alguno coincide con el indice?
