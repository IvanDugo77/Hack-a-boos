"use strict";

let variableQueCambia;

const variableQueNoCambia = "fijo";

//Tipos de datos

let string = "Hola";

let number = 5;

let boolean = true;

let tipoUndefined = undefined;

let tipoNull = null;

//OPERADORES ARITMETICOS
//El resultado siempre es tipo number, excepto con la suma que puede ser string

//Suma o concatenación +

console.log(2 + 2); //4
console.log("hola " + "mundo"); // hola mundo
console.log(2 + "2"); // 22

//Resta (-)
//Multiplicacion (*)
//Division (/)
//Potencia (**)
//Modulo (%) -> resto de la división

console.log(8 % 3); // 8 / 3 = 6 y reto 2 -> el modulo es 2

console.log(8 - "2"); // 6, convierte el 2 a numero

console.log(8 - "a"); //NaN: Not a Number (no es un número)

console.log(typeof (8 - "a"));

console.log(100 / 0);

console.log(4 + 2 * 5); // 4 + 10 = 14
console.log((4 + 2) * 5); //6*5=30

// Operadores de reasignacion (operador=)

let num = 8;
num -= 4;
console.log(num);

num += "2"; // num = num + "2"
console.log(num);
