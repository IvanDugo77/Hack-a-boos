"use strict";

//Crea una función que reciba un número como parámetro
//y devuelva true si es par o false si es impar
//Un numero es par si al dividir entre dos no da resto
// 8 -> true
// 3 -> false

console.log("esPar:");
function esPar(num) {
  /*   if (num % 2 === 0) {
    return true;
  } else {
    return false;
  } */

  return num % 2 === 0;
}

console.log(esPar(8));
console.log(esPar(3));

console.log("");
console.log("esImpar:");
function esImpar(num) {
  /*   if (num % 2 === 0) {
    return false;
  } else {
    return true;
  } */

  return num % 2 !== 0;
}

console.log(esImpar(8));
console.log(esImpar(3));

//Crea un función que reciba dos numeros como parámetros
//Devuelve true si el primero es divisible entre el segundo. False si no.
//Un numero es divisible entre otro si al devidirlo no da resto
//9, 3 -> true
// 8, 3 -> false

console.log("");
console.log("esDivisible:");
function esDivisible(dividendo, divisor) {
  /*   if (dividendo % divisor === 0) {
    return true;
  } else {
    return false;
  } */

  return dividendo % divisor === 0;
}

console.log(esDivisible(9, 3));

let esDivisible8entre3 = esDivisible(8, 3);
console.log(esDivisible8entre3);

//Crea una función que reciba un número y devuelva true si es primo y false si no
//Un numero es primo si no es divisible entre ningun número entre 2 y el anterior a él mismo
//(Podemos dar por hecho que no va a recibir números inferiores a 2)
//13 -> true
//14 -> false

console.log("");
console.log("esPrimo:");
function esPrimo(num) {
  for (let i = 2; i < num; i++) {
    //console.log(i);
    //console.log(esDivisible(num, i));
    if (esDivisible(num, i)) {
      return false;
    }
  }

  return true;
}

console.log(esPrimo(13));
console.log(esPrimo(15));

//Crea una función que reciba un número como parámetro y saque por consola todos los numeros primos hasta el (incluido)
//15 -> 2, 3, 5, 7, 11, 13

console.log("");
console.log("Primos:");
function imprimirPrimos(limite) {
  for (let i = 2; i <= limite; i++) {
    if (esPrimo(i)) {
      console.log(i);
    }
  }
}

imprimirPrimos(100);

//
//
//
//
console.log("");
console.log("");
console.log("Numeros aleatorios:");
/* 
//Numero aleatorio (de 0 a 1 (no incluido))
Math.random()
*/

console.log(Math.random());
console.log(Math.random());
let aleatorio = Math.random();

console.log(aleatorio);
console.log(aleatorio);
console.log(aleatorio);

console.log(Math.random());

console.log("");
//Numero aleatorio de 0 a un maximo (no incluido) (con decimales)

//Math.random() * max
console.log(Math.random() * 10);

console.log(Math.random() * 100);
console.log(Math.random() * 15);
console.log(Math.random() * Math.PI);

console.log("");
//De 0 a un maximo redondeado (poco preciso)
// Math.round(Math.random() * max)

console.log(Math.round(Math.random() * 10));
console.log(Math.round(Math.random() * 100));

console.log("");
//Numero aleatorio entre un minimo y un maximo (con decimales)

//(Math.random() * (max - min)) + min

console.log(Math.random() * (15 - 5) + 5);

console.log("");

//Numero aleatorio entre un minimo y un maximo sin decimales
//Math.round((Math.random() * (max - min)) + min)

console.log(Math.round(Math.random() * (15 - 5) + 5));

console.log(Math.round(Math.random() * 24 - 3) + 3);

function aleatorioRango(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

console.log(aleatorioRango(10, 100));
