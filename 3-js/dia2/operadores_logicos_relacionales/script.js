"use strict";

//OPERADORES RELACIONALES
// El resultado siempre es un booleano

let miNumero = 3;
let miString = "hola";

//Igualdad (estricta) (===)
console.log(miNumero === 3); //true
console.log(miString === "adiós"); //false
console.log("0" === 0); //false

//Desigualdad estricta (!==)
console.log("");

console.log(miNumero !== 3); //false
console.log(miString !== "adiós"); //true
console.log("0" !== 0); //true

//Mayor estricto (>)
console.log("");

console.log(miNumero > 2); //true
console.log(miString > "adiós"); //true. Utiliza el codigo ASCII. h > a === 104 > 97

console.log(miNumero > 3); //false. Son iguales

// Mayor o igual (>=)
console.log("");

console.log(miNumero >= 2); //true
console.log(miNumero >= 3); //true

//Menor estricto (<)
console.log("");

console.log(miNumero < 2); //false
console.log(miString < "adios"); //false

console.log(miNumero < 3); //false

//Menor o igual (<=)
console.log("");

console.log(miNumero <= 2); //false
console.log(miNumero <= 3); //true

////////////////////////////////

// OPERADORES LOGICOS
// El resultado siempre es un booleano
console.log("");
console.log("LOGICOS");

// AND (&&)
//Es true cuando TODOS los operandos son true
// Es false si ALGÚN operando es false

console.log(true && true); //true
console.log(true && false); //false

console.log(miNumero > 2 && miNumero < 10); //true && true = true

console.log(miNumero > 5 && miNumero < 10); //false && true =false

// OR (||)
//Es true cuando ALGUN operador es true
//Es false cuando TODOS los operadores son false
console.log("");

console.log(miNumero < 8 || miNumero > 20); //true || false = true

console.log(miNumero > 18 || miString === "permiso"); //false || false = false

//Negación (!)
//Devolvuel el valor booleano contrario
console.log("");

console.log(!true); //false
console.log(!false); //It's funny because it's true

console.log(!(miNumero === 3)); //!true = false
