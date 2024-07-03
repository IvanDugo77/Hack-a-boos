"use strict";

//SELECCIONAR ELEMENTOS (modo antiguo)

////Seleccionar un unico elemento

//////Por ID

let pUnico = document.getElementById("unico");

console.log(pUnico);

////Seleccionar varios elementos

//////Por etiqueta

let parrafos = document.getElementsByTagName("p");

console.log(parrafos);
console.log(parrafos[2]);

//////Por clase

let pEspeciales = document.getElementsByClassName("especial");

console.log(pEspeciales);
