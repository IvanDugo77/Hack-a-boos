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

//SORT
//Ordena el array original según el resultado del callback
//El callback recibe dos elementos (a y b) del array y debe devolver un numero mayor, menor o igual a 0
//Si el numero es mayor que 0, a va despues que b
//Si el numero es menor que 0, b va despues que a
//Si el numero es 0, se quedan en el mismo orden

console.log(numeros.sort((a, b) => a - b));

console.log(numeros.sort()); //ordena como si fueran strings

console.log(animales.sort()); //ordena alfabeticamente

console.log(animales.sort((a, b) => a.length - b.length));

console.log(numeros.sort((a, b) => b - a));

console.log(usuarios.sort()); //no hace nada

//Ordenar objetos segun una propiedad

////Si la propiedad es un numero, es sencillo:
console.log(usuarios.sort((a, b) => a.edad - b.edad));

////Si la propiedad es una string, se complica:
function ordenar(a, b) {
  if (a.nombre > b.nombre) {
    return 1;
  } else if (a.nombre < b.nombre) {
    return -1;
  } else {
    return 0;
  }
}

console.log(usuarios.sort(ordenar));
