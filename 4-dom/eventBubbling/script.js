"use strict";

let body = document.querySelector("body");

let html = document.querySelector("html");

let header = document.querySelector("header");

//EVENT BUBBLING
//Por defecto, todos eventos que lance un elemento, iran escalando por todos sus padres

let titulo = document.querySelector("h1");

titulo.addEventListener("click", () => console.log("click en h1"));

header.addEventListener("click", () => console.log("header"));

body.addEventListener("click", () => console.log("body"));

html.addEventListener("click", () => console.log("html"));

////////////
// Se puede evitar que se propague hacia arriba con e.stopPropagation()

let h2 = document.querySelector("h2");

let main = document.querySelector("main");

h2.addEventListener("click", () => console.log("h2"));

function handleMainClick(e) {
  e.stopPropagation();

  console.log("click en el main");
}

main.addEventListener("click", handleMainClick);
