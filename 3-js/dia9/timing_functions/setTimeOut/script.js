"use strict";

//setTimeOut
//Es una función que recibe dos argumentos:
//1- un callback
//2- un numero (representa tiempo en milisegundos)
//Ejecuta el callback cuando haya pasado el tiempo

function saludar() {
  console.log("hola");
  setTimeout(() => console.log("adios"), 2000);
}

setTimeout(saludar, 1000);

// Deasctivar un time out:

function explotar() {
  console.log("BOOOOOM!");
}

let bomba = setTimeout(explotar, 3000); //debe tener nombre (estar en una variable)

clearTimeout(bomba); //funcion para desactivar, recibe la variable en la que guardamos el timeout

console.log("final");

//alert("alert");

console.log("despues");

setTimeout(() => {
  console.log("1");
  setTimeout(() => console.log("2"), 1000);
}, 4000);
