"use strict";

//MOVERSE POR EL DOM

let main = document.querySelector("main");
console.log(main);

//Con nodos (poco práctico)

let nodosHijos = main.childNodes; //nodos hijos
console.log(nodosHijos);

let primerNodoHijo = main.firstChild; //primer nodo hijo
console.log(primerNodoHijo);

let ultimoNodoHijo = main.lastChild; //ultimo nodo hijo
console.log(ultimoNodoHijo);

let nodoHermanoAnterior = main.previousSibling; //.previousSibling;
console.log(nodoHermanoAnterior);

let nodoHermanoSiguiente = main.nextSibling; //.nextSibling;
console.log(nodoHermanoSiguiente);

let nodoPadre = main.parentNode;
console.log(nodoPadre);

//////////////////////////////

//Directamente elementos

let elementosHijos = main.children;
console.log(elementosHijos);

let primerElementoHijo = main.firstElementChild;
console.log(primerElementoHijo);

let ultimoElementoHijo = main.lastElementChild;
console.log(ultimoElementoHijo);

let elementoHermanoAnterior = main.previousElementSibling;
console.log(elementoHermanoAnterior);

let elementoHermanoSiguiente = main.nextElementSibling;
console.log(elementoHermanoSiguiente);

let elementoPadre = main.parentElement;
console.log(elementoPadre);
