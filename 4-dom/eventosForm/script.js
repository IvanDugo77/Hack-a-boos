"use strict";

//Selecciono un campor del form

let { name } = document.forms[0].elements; // let name = document.forms[0].elements.name

//FOCUS
//Se lanza cunado hacemos foco en el campo

function handleFocus(e) {
  console.log("foco en el input");
}

name.addEventListener("focus", handleFocus);

//BLUR
//Se lanza cuando pierde el foco

function handleBlur() {
  console.log("Perdio el foco");
}

name.addEventListener("blur", handleBlur);

//CHANGE
//Pierde el foco y el valor ha cambiado

function handleChange() {
  console.log("ha perdido el foco y el valor cambió");
}

name.addEventListener("change", handleChange);

//INPUT
//Cada vez que cambia el valor

function handleInput() {
  console.log("cambio");
}

name.addEventListener("input", handleInput);
