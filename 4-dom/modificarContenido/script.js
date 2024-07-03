"use strict";

let user = {
  nombre: "Zoe",
};

//MODIFICAR CONTENIDO

let titulo = document.querySelector("h1");
let pList = document.querySelectorAll("p");
console.log(pList);

//TEXTO
//textContent

console.log(titulo.textContent); //Leer

let textoOriginal = titulo.textContent;

titulo.textContent = `Hola ${user.nombre}`;

console.log(pList[0].textContent); //saca el texto limpio (lo que lee), sin etiquetas

pList[0].textContent = `Este parrafo <strong>lo he cambiado</strong>`; //Lo escribe literalmente, con etiquetas y todo

//HTML
//interno (innerHTML)

let htmlOriginal = pList[1].innerHTML;
console.log(htmlOriginal); //Saca todo lo que hay dentro del elemento, incluso etiquetas

pList[1].innerHTML = `He modificado <strong>este texto</strong>`; //Se interpreta y las etiquetas hacen su funcion

//externo (outerHTML)
console.log(pList[2].outerHTML); //Sala el HTML incluido la etiqueta del elemento

pList[2].outerHTML = `<div>Ahora esto es un div</div>`; //Se interpreta como HTML, pero reemplaza al elemento entero, no su contenido

//¡OJO con outerHTML! Habria que volver a seleccionarlo para seguir trabajando con él
console.log(pList[2]);

let div = document.querySelector("div");
console.log(div);
