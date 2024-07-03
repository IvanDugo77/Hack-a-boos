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

function checkAge(user) {
  if (user.edad >= 18) {
    return "mayor";
  } else {
    return "menor";
  }
}
//MAP
//Devuelve un nuevo array igual de largo que el original
//En cada posición mete lo que devuelva el callback al aplicarlo a cada elemento del original

function masUno(num) {
  return num + 1;
}

let unoMas = numeros.map(masUno);
console.log(unoMas);

let animalesMasUno = animales.map(masUno);
console.log(animalesMasUno);

let nombres = usuarios.map((usuario) => usuario.nombre);

console.log(nombres);

///////////////////

function myMap(callback, array) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    let cbRes = callback(array[i], i);
    newArr.push(cbRes);
  }

  return newArr;
}

let unoMas2 = myMap(masUno, numeros);

console.log(unoMas2);

/* function listar(animal, i){
  return `${i} - ${animal}`
}
let lista = animales.map(listar) */

let lista = animales.map((animal, i) => `${i} - ${animal}`);

console.log(lista);

/* let lista2 = myMap(listar, animales) */

const lista2 = myMap((animal, i) => `${i} - ${animal}`, animales);

console.log(lista2);

console.log(usuarios.map((user, i) => "Un usuario"));

function sumar(a, b) {
  return a + b;
}

console.log(numeros.map((num) => sumar(num, 2)));

function externa(num) {
  return sumar(num, 2);
}

console.log(numeros.map(externa));

//Copia con map

let usuariosCopia = usuarios.map((usuario, i) => {
  return { mascota: "no", indice: i, ...usuario };
});

console.log(usuariosCopia);

usuariosCopia[1].nombre = "Luis";

console.log(usuarios);
