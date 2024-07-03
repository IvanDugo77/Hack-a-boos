"use strict";

//Normalmente podemos dejar que JS se encargue de convetir los tipos a los que necesite

//Podemos convertir lo que queramos mediante los constructores

console.log(String(4));

console.log(Boolean(3));

console.log(Number("2"));

//Otras formas de convertir a numero

console.log(parseInt("6"));
console.log(parseInt("hola"));

console.log(+"4");
console.log(+"-2");

console.log(-"4");
console.log(-"-2");

console.log(4 + +"4");

console.log("");
console.log("");

///////
//Comprobar si un dato es un número (o convertible)

let num = 4;

let numStr = "2";

let str = "hola";

//No sirve el typeof
console.log(typeof num === "number");

console.log(typeof numStr === "number");

console.log(typeof str === "number");

console.log("");

// Y typeof + conversion?
//Tampoco, el typeof de NaN es number

console.log(+num);
console.log(typeof +num === "number");

console.log(+numStr);
console.log(typeof +numStr === "number");

console.log(+str);
console.log(typeof +str === "number");

/////////////

console.log("");
//Función isNaN(valor)
//Si es un número o convertible a número = false
//Si no = true

//Es decir, dice si al convertir a número devuelve NaN

console.log(isNaN(num));
console.log(isNaN(numStr));
console.log(isNaN(str));

console.log("");
/////
//Para que responda en positivo (si es un numero), negamos el valor con !

console.log(!isNaN(num));
console.log(!isNaN(numStr));
console.log(!isNaN(str));

let myNum = 4;

let userNum = prompt("introduce un número");

console.log(myNum + +userNum);
