"use strict";

//SELECCIONAR ELEMENTOS (metodo moderno)

//Un elemento (querySelector)
//(El primero que encuentre)

let pUnico = document.querySelector("#unico"); //por id

console.log(pUnico);

let parrafo = document.querySelector("p"); //por etiqueta
console.log(parrafo);

let main = document.querySelector("main");
console.log(main);

let especial = document.querySelector(".especial"); //por clase
console.log(especial);

let pBody = document.querySelector("body > p"); //Selector compuesto
console.log(pBody);

///////////////

//Varios elementos (querySelectorAll)

let parrafos = document.querySelectorAll("p:not(.especial):not(#unico)"); //por etiqueta
console.log(parrafos);

let especiales = document.querySelectorAll(".especial"); //por clase

console.log(especiales);

let conClase = document.querySelectorAll("[class]");
console.log(conClase);

let enElBody = document.querySelectorAll("body > p");
console.log(enElBody);

let conIds = document.querySelectorAll("#unico, #inimitable");
console.log(conIds);

let parrafosMain = main.querySelectorAll("p"); //por etiqueta dentro de main
console.log(parrafosMain);
