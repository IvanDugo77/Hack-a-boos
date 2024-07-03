"use strict";

//ALERT
//Muestra un aviso que bloquea la ṕagina hasta que el usuario lo cierre

alert("ATENCIÓN!");

///////////
//CONFIRM
//Muetra un aviso que bloquea la página y ofrece dos opciones: cancelar o aceptar
//Si el usuario le da a aceptar, su valor es true; si le da a cancelar, su valor es false

let confirmacion = confirm("Aceptas continuar bajo tu propio riesgo?");

console.log(confirmacion);

if (confirmacion) {
  console.log("el usuario puede continuar");
} else {
  console.log("cerrando página...");
}

let seguir;

do {
  seguir = confirm("seguir?");
} while (seguir);

/////////////

//PROMPT
//Muestra un aviso que bloquea la página, con un campo de entrada de datos
//Su valor será el que introduzca el usuario en el campo (siempre string)
//Si no introduce nada es ""
//Si le da a cancel es null

const nombre = prompt("Introduce tu nombre");

console.log(nombre);

let edad = prompt("Introduce tu edad");

while (isNaN(edad) || edad === null) {
  edad = prompt("La edad debe ser un número");
}

if (edad >= 18) {
  console.log(`${nombre} es mayor de edad`);
} else {
  console.log(`${nombre} es menor de edad`);
}
