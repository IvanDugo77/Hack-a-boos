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

//REDUCE
//Devuelve un unico valor: lo que quede en el acumulador al terminar
//El callback recibe dos argumentos: el accumulador y el valor actual (y opcionalmente el indice)
//Reduce aplicará a cada elemento el callback y guardara el resultado en el acumulador

//Reduce admite un segundo parametro que es el inicializador

function reducer(acc, current) {
  return acc + current;
}

let total = numeros.reduce(reducer);

console.log(total);

let iniciales = animales.reduce((acc, el) => acc + el[0], "");

console.log(iniciales);

let edadTotal = usuarios.reduce((acc, usuario) => acc + usuario.edad, 0);

console.log(edadTotal);

function getInitials(acc, usuario) {
  acc[usuario.nombre] = usuario.nombre[0];
  return acc;
}

let inicialesUsuarios = usuarios.reduce(getInitials, {});

console.log(inicialesUsuarios);

//////////////
//¿Como funciona reduce?

function myReduce(callback, array, init) {
  let acc = init ?? array[0];

  for (let i = 0; i < array.length; i++) {
    acc = callback(acc, array[i], i);
  }

  return acc;
}

let total2 = myReduce(reducer, numeros, 10);

console.log(total2);
