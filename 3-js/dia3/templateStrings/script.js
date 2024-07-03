"use strict";

let nombre = "Zoe";
let apellido = "Porta";

let stringNormal = "Hola " + nombre + " " + apellido + ", \nbuenos días";

console.log(stringNormal);

//TEMPLATE STRINGS
// Llevan comillas francesas (backticks) ``
//Permiten saltos de línea
//Permiten inyectar exresiones con la sintaxis ${expresion}

let templateString = `Hola ${nombre} ${apellido},
buenos días ${2 + 2}`;

console.log(templateString);
