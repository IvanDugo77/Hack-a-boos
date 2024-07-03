"use strict";

// BUCLES

//for

let vueltas = 10;

for (let i = 0; i < vueltas; i++) {
  console.log(`Vuelta: ${i}`);
}

////////////////////
//while
console.log("");

let continuar = true;
let counter = 0;

while (continuar) {
  console.log(`Vuelta: ${counter}`);
  counter++;

  let aleatorio = Math.random();
  console.log(aleatorio);

  if (aleatorio > 0.7) {
    continuar = false;
  }
}

/////////////

//do... while

/* 
do{
  //codigo que se repite al menos una vez
} while(condición)
*/
console.log("");

// Si llega hasta aqui, continuar es false

console.log(continuar);

do {
  console.log("esto se ejecuta una vez si la condición es false");
  console.log("Se seguiría repitiendo si  fuese true");
} while (continuar);

let contador = 0;
do {
  console.log(contador);
  contador++;
} while (contador < 5);

console.log(" ");
console.log("EJEMPLO:");
let fotos = [];

let numFoto = 0;
do {
  console.log("creando section");
  console.log("creando article");
  console.log("creando figure");
  console.log("...");

  console.log(`foto: ${fotos[numFoto]}`);

  console.log("");

  numFoto++;
} while (numFoto < fotos.length);
