"use strict";

let nombres = ["Maria", "Jose", "Manolo", "Ana", "Luis", "Carla"];

let miObj = {
  nombre: "Zoe",
  edad: "28",
  email: "zoe.porta.garcia@hackaboss.com",
  mascota: "Nymeria",
  ciudad: "A Coruña",
};

/* let primerNombre = nombres[0]
let segundo = nombres [1]

let nombre = miObj.nombre
let edad = miObj.edad */

//DESTRUCTURING

//De Array

//Importa el orden

let [primero, segundo] = nombres;

console.log(primero);
console.log(segundo);
console.log(nombres);

//Podemos saltarnos posiciones dejando el hueco

let [primeroB, , tercero] = nombres;

console.log(primeroB);
console.log(tercero);

//Podemos sacar a todos los que falten con ...rest

let [primeroC, , terceroB, ...losDemas] = nombres;

console.log(primeroC);
console.log(terceroB);
console.log(losDemas);

///////////////////////////

//De objetos

//Importa el nombre

let { nombre, email } = miObj;

console.log(nombre);
console.log(email);

//Podemos cambiarle el nombre

let { nombre: nombreB } = miObj;

console.log(nombreB);

console.log(miObj);

//Podemos sacar otro objeto con las propiedades sobrantes con ...rest

let { mascota, edad, ...loDemas } = miObj;

console.log(mascota);
console.log(edad);
console.log(loDemas);

///////////////////////////

//Podemos hacer destucturing directamente en los parametros de una funcion

function leerObjeto({ nombre, edad }) {
  console.log(nombre, edad);
}

leerObjeto(miObj);
