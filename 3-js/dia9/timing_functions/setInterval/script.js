"use strict";

//setInterval
//Es una funcion que recibe dos argumentos
//1- un callback
//2- un numero (tiempo en milisegundos)
//LLama al callback cada vez que pasa el tiempo

function saludar() {
  console.log("hola");

  //no deberiamos meter un intervalo dentro de otro
}

setInterval(saludar, 2000);

setInterval(() => console.log("adios"), 3000);

console.log("final");

//Desactivar un intervalo

function explotar() {
  console.log("BOOM!");
}

let bomba = setInterval(explotar, 3000); //debe tener nombre

//clearInterval(bomba); //nunca empieza

setTimeout(() => clearInterval(bomba), 10000); //para a los 10s

///////////////////////
//Desactivar despues de un numero de veces

let counter = 0; //necesitamos seguimiento de las veces

let intervalo; //creamos la variable para tenerla disponible

function veces() {
  console.log(counter);
  counter++; //aumentamos las veces

  if (counter >= 5) {
    clearInterval(intervalo);
    console.log("PARÓ");
  }
}

intervalo = setInterval(veces, 1000);
