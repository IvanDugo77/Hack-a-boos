"use strict";

//FALSY
//Su valor booleano es false
//Si se convierte (con Boolean(valor) o coercion de tipos) va a convertirse en false)

//0, undefined, null, "", NaN, false

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(""));
console.log(Boolean(NaN));
console.log(!!0); // Poner !! es lo mismo que usar Boolean()

let vacio = "";

console.log(Boolean(vacio));

if (vacio) {
  console.log("es truthy");
} else {
  console.log("es falsy");
}

if (8 - "a") {
  // 8 - "a" = NaN
  console.log("es truthy");
} else {
  console.log("es falsy");
}

//TRUTHY
//Su valor booleano es true
//Si se convierte en booleano (con Boolean() o coercion de tipos) va a convertirse en true

// Todo lo demás

console.log(Boolean(-1));
console.log(Boolean(" "));
console.log(Boolean([]));
console.log(Boolean({}));

if (" ") {
  console.log("es truthy");
} else {
  console.log("es falsy");
}

let userName;

if (userName) {
  // es lo mismo que if(Boolean(userName)){
  console.log("Hola " + userName);
} else {
  console.log("Hola anónimo");
}

console.log(Number(8) - Number("2")); //8-2=6

console.log(Number("a"));
console.log(Number("2"));

let x = 3;
let y = 14;

let result = x + y;

console.log(Math.PI);

console.log(Math.sqrt(9));
