"use strict";

// CONCATENACIÓN

console.log("hello" + " world");

let str1 = "hello";
let str2 = "world";

console.log(str1 + " " + str2);

let cantidad = 5;
let fruta = "manzanas";

console.log(cantidad + " " + fruta);

console.log(2 + 2);
console.log("2" + 2);

console.log(2 + 2 + "2");

let edad = "28";
let edadFutura = edad + 10;

console.log("Dentro de 10 años tendrás " + edadFutura + " años.");

//Crear dos variables: edad (number) y nombre (string)
//Sacar por consola la frase "Soy *nombre* y tengo *edad* años."

let edad2 = 28;

let nombre = "Zoe";

console.log("Soy " + nombre + " y tengo " + edad + " años.");
console.log(" ");

// OPERADORES ARITMETICOS
console.log("OPERADORES ARITMETICOS");

let numA = 4;
let numB = 8;

// Suma (+)
console.log("Suma");

console.log(numA + numB);
console.log(4 + 8);
console.log(4 + numB);

//Resta (-)
console.log("Resta");

console.log(numA - numB);

//Multiplicación (*)
console.log("Multiplicacion");

console.log(numA * 2);

//División (/)
console.log("División");

console.log(numA / 2);

// Potencia (**)
console.log("Potencia");

console.log(numA ** 2);

//Módulo (%)
console.log("Módulo");
//El resto de la división

console.log(numB % 3);

////////////
console.log("numA y numB:");
console.log(numA, numB);

////////////////////////

// OPERADORES ARITMETICOS DE REASIGNACIÓN
console.log("REASIGNACIÓN");

//El operando de a izquierda siempre será una variable

//Suma (+=)

numA += 2;
console.log("Suma:", numA);

//Resta (-=)

numA -= numB;

console.log("resta:", numA);

//Multiplicación (*=)

numA *= 2;

console.log("Multiplicación:", numA);

//División (/=)
numA /= 2;

console.log("División:", numA);

//Potencia (**=)
numA **= 3;

console.log("Potenica:", numA);

//Modulo (%=)
numA %= 3;

console.log("Modulo", numA);

//OPERADORES UNARIOS
console.log("UNARIOS");

console.log("numB:", numB);

//Aumento (++)

console.log(++numB); //aumenta 1 en esta linea
console.log(numB++); //aumenta 1 en la siguiente linea
console.log(numB);

//Decremento

console.log(--numB); //decrementa 1 en esta linea
console.log(numB--); //decrementa 1 en la siguiente linea
console.log(numB);

/* 
puntos++; //puntos = puntos + 1
puntos += 5; //puntos = puntos + 5
puntos *= 2; //puntos = puntos * 2
 */

/* DRY = Don't repeat yourself 
  WET = We enjoy typing 
*/
