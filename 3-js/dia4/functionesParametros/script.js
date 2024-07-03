"use strict";

//Cuando necesitamos usar dentro de una funcion datos externos o que cambien, usamos parámetros

function pescar(cebo) {
  switch (cebo) {
    case 1:
      return "lubina";

    case 2:
      return "salmon";

    case 3:
      return "trucha";

    default:
      return "nada";
  }
}

let miCebo = 3;

console.log(`Has pescado: ${pescar(1)}`);
console.log(`Has pescado: ${pescar(1)}`);
console.log(`Has pescado: ${pescar(2)}`);

console.log(`Has pescado: ${pescar(miCebo)}`);

let miNumA = 4;
let miNumB = 5;

function multiplicar(numA, numB) {
  return numA * numB;
}

console.log(multiplicar(3, 2));

console.log(multiplicar(miNumA, miNumB));

function presentar(nombre, edad) {
  console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`);
}

//Lo que importa es el orden
presentar("Zoe", 28);
presentar(28, "Zoe");

/////////////

function checkAge(age) {
  if (isNaN(age)) {
    console.log("dato invalido");
    return; //false;
  }

  if (age >= 18) {
    console.log("mayor");
  } else {
    console.log("menor");
  }
}

checkAge("a");
