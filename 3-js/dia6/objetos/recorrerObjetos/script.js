"use strict";

let mascotas = {
  buffy: "perro",
  nymeria: "gato",
  marcos: "gato",
  yoda: "perro",
};

// BUCLE FOR
//No podemos recorrer directamente el objeto, primero hay que convertirlo a array

////// Object.keys(objeto)
/////Devuelve un array con las claves del objeto

let nombresMascotas = Object.keys(mascotas);

console.log(nombresMascotas);

/////Object.values(objeto)
/////Devuelve un array con los valores del objeto

let especiesMascotas = Object.values(mascotas);
console.log(especiesMascotas);

///// Object.entries(objeto)
/////Devuelve un array de arrays de dos entradas correspondientes a la pareja clave-valor
////En cada uno de los arrays "hijos", el elemento 0 es la clave y el 1, el valor

console.log(Object.entries(mascotas));

////
for (let i = 0; i < nombresMascotas.length; i++) {
  console.log(nombresMascotas[i]);
  console.log(mascotas[nombresMascotas[i]]);
}

console.log("///////////////");
/////////////////////////
//FOR...IN

for (const key in mascotas) {
  console.log(key);
  console.log(mascotas[key]);
}

/* let perros = 0;
let gatos = 0;

for (const key in mascotas) {
  if (mascotas[key] === "perro") {
    perros++;
  } else if (mascotas[key] === "gato") {
    gatos++;
  }
}

console.log(perros);
console.log(gatos);
 */

function contar(animal, obj) {
  let counter = 0;
  for (const key in obj) {
    if (obj[key] === animal) {
      counter++;
    }
  }

  return counter;
}

console.log(contar("perro", mascotas));

///////////////

let numeros = {
  a: 5,
  b: 10,
  c: 8,
  d: 14,
};

function sumar2(num) {
  console.log(num + 2);
}

for (const key in numeros) {
  sumar2(numeros[key]);
}
