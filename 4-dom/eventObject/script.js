"use strict";

let titulo = document.querySelector("h1");

console.log(titulo);

function handleTitleClick(e) {
  console.log(e);

  //Comprobar si estabamos pulsando teclas especiales (alt, shift, ctrl)

  if (e.ctrlKey) {
    console.log("pulsado tecla control");
  }

  if (e.altKey) {
    console.log("pulsando alt");
  }

  if (e.shiftKey) {
    console.log("pulsando shift");
  }
}

titulo.addEventListener("click", handleTitleClick);

////////
//Eventos de teclado

function handleKeydown(e) {
  console.log(e);

  if (e.code === "KeyD") {
    console.log("presionaste la D");
  }

  if (e.key === "D") {
    console.log("estaba en mayúscula");
  }
}

document.addEventListener("keydown", handleKeydown);

////////////////////////////
//TARGET: el elemento que lanza el evento

//Seleccionamos los elementos
let lis = document.querySelectorAll("li");

//Creamos la funcion generica (sera la misma para todos los elementos)
function handleLiClick(e) {
  //El li que activa el evento es el target del evento
  let li = e.target;
  console.log(li);

  //Si no tiene el atributo data-count, se lo añadimos iniciandolo en 1
  if (!li.dataset.count) {
    li.dataset.count = 1;
  }
  //SI lo tiene, lo aumentamos
  else {
    li.dataset.count++;
  }

  //Cambiamos el texto
  li.textContent = `${li.dataset.count} clicks`;
}

for (const li of lis) {
  li.addEventListener("click", handleLiClick);
}
