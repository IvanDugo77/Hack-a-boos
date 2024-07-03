"use strict";

//CREAR ELEMENTOS

//Crear

let titulo = document.createElement("h1");

let header = document.createElement("header");

console.log(titulo);

//Modificar (ya lo hemos visto)

titulo.textContent = "Este título fue creado con JS";

console.log(titulo);

//Añadir elementos a otros
header.append(titulo); //append = al final
console.log(header);

//Añadir al DOM

////(Primero hay que seleccionar algo)

let body = document.querySelector("body");

////Añadir
body.prepend(header); //prepend = al principio

//////////////////////////

//Crear elementos en bucle

let lista = ["lechuga", "pan", "huevos", "cereales", "papel", "leche"];

let ul = document.createElement("ul");

for (let objeto of lista) {
  let li = document.createElement("li");
  li.textContent = objeto;
  ul.append(li);
}

body.append(ul);

/////////////////////
//Fragment

//Cuando no podemos llenar el contenedor antes de añadirlo porque ya está en el dom, usamos fragment

////Creamos el fragment

let fragment = document.createDocumentFragment();

for (let objeto of lista) {
  let li = document.createElement("li");
  li.textContent = objeto;

  fragment.append(li);
}

console.log(fragment);

let ol = document.querySelector("ol");

ol.append(fragment);

/////////////////////
//Añadir algo por el medio del DOM

let newEl = document.createElement("p");
newEl.textContent = "Este párrafo va entre las dos listas";

//Tenemos que selecconar (o tener seleccionado el elemento que queremos que vaya despues del nuevo) y tambien el padre de ambos

//El metodo es del padre

body.insertBefore(newEl, ul);

///////////////////////////
// Eliminar elementos

let pBorrar = document.querySelector("p#borrar");

/// metodo antiguo: //pBorrar.parentElement.removeChild(pBorrar);

pBorrar.remove();
