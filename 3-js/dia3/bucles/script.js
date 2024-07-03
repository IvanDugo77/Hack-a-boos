"use strict";

//BUCLES

//FOR

/* 
for(inicializacion; condition; modificacion){
  //Codigo que se repite
}


for(let i = 0; i < vueltas; i++){
  //codigo que se repite
}

*/

let vueltas = 5;

for (let i = 0; i < vueltas; i++) {
  console.log("vuelta");
}

for (let i = 0; i < vueltas; i++) {
  console.log("vuelta", i);
}

/* 
1 - i = 0
2 - 0 < 5
3- true -> ejecuta
4- i + 1 = 1
  2- 1 < 5
  3- true -> ejecuta
  4- i+1 = 2
  2- 2 < 5
  3- true -> ejecuta
  4- i+1 = 3
  2- 3 < 5
  3- true -> ejecuta
  4- i+1 = 4
  2- 4 < 5
  3- true -> ejecuta
  4- i+1 = 5
  2- 5 < 5
5- false -> fin
 */

for (let i = 0; i < vueltas; i++) {
  //i++ -> i=i+1
  if (i % 2 === 0) {
    console.log(i, "es par");
  } else {
    console.log(i, "es impar");
  }
}

for (let i = 0; i <= 10; i += 2) {
  //i+=2 -> i=i+2
  console.log(i);
}

for (let i = 10; i > 5; i--) {
  console.log(i);
}

let numElementos = 4;
let lista = ["patatas", "huevos", "azucar", "pan"];

for (let i = 0; i < numElementos; i++) {
  console.log("Creando li:", lista[i]);
}

console.log("");
console.log("Tabla del 5:");

for (let i = 0; i <= 10; i++) {
  console.log(5 * i);
}

console.log("");
console.log("TABLAS");

for (let i = 1; i <= 10; i++) {
  console.log("Tabla del", i);

  for (let j = 0; j <= 10; j++) {
    console.log(i * j);
  }
}

console.log("");
console.log("//////EJERCICIOS/////");

//Mostrar por consola una cuenta atrás de 20 a 10 (no incluido)
console.log("ej 1:");

for (let i = 20; i > 10; i--) {
  console.log(i);
}

/* for (let i = 20; i !== 10; i--) {
  console.log(i);
} */

//Muestra por consola un patrón como este: 10, 20, 30, 40... hasta 100 (incluido)
console.log("ej2:");

for (let i = 10; i <= 100; i += 10) {
  console.log(i);
}

console.log("");

for (let i = 1; i <= 10; i++) {
  console.log(i * 10);
}

console.log("");

for (let i = 10; i < 101; i += 10) {
  console.log(i);
}

///////////////

//WHILE
/* 
while(condicion){
  //codigo que se repite mientras la condición sea true
}
*/

let contador = 0;

while (contador < 10) {
  console.log(contador);

  //En principio la condicion siempre debe dejar de ser true desde DENTRO del bucle. Si no, será infinito
  contador++;
}
