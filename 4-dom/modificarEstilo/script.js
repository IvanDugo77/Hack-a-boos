"use strict";

let titulo = document.querySelector("h1");

console.log(titulo);

// ¡OJO! La propiedad style refleja el atributo de html style (estilos en linea). No mostrará lo que haya en hojas externas ni en la etiqueta style del head

console.log(titulo.style); //leer TODOS los estilos

console.log(titulo.style.color); //leer el valor de color

/////////////////////
//La propiedad style se usa para dar estilos

//Establecer una propiedad
titulo.style.color = "magenta";

titulo.style.backgroundColor = "black";

//Establecer varias a la vez
///Sustituye TODO el contenido del atributo style (los estilos externos se mantienen)
titulo.style.cssText = "font-family: sans-serif; border: 1px solid black;";

////////////////
//Si queremos saber que estilos se estan aplicando...

let estilosTitulo = window.getComputedStyle(titulo);

console.log(estilosTitulo);
console.log(estilosTitulo.color);
