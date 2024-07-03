"use strict";

let button = document.querySelector("button");

//METODO ANTIGUO (poco aconsejable)
//button.onclick = () => console.log("click!");

//METODO MODERNO: event listeners

///Con funcion anonima

button.addEventListener("click", () => console.log("click"));

///Con funcion con nombre

function buttonClickHandler() {
  console.log("otro");
}

button.addEventListener("click", buttonClickHandler);

/////
//Cuando la funcion tiene nombre, se le puede quitar

button.removeEventListener("click", buttonClickHandler);

////////////////////////////

function handleMouseEnter(e) {
  console.log(e);
  if (e.altKey) {
    console.log("estaba pulsando alt");
  } else {
    console.log("Raton encima");
  }
}

button.addEventListener("mouseenter", handleMouseEnter);

//////////////////////////

function handleKeyDown(e) {
  //console.log(e);

  if (e.code === "KeyL" || e.code === "KeyP") {
    console.log("Has apretado la l o la p");
  }
}

document.addEventListener("keydown", handleKeyDown);
