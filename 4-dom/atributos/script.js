"use strict";

let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let passInput = document.querySelector("#password");
let button = document.querySelector("button");
let reset = document.querySelector("[type='reset']");

console.log(nameInput, emailInput, passInput, button, reset);

//ATRIBUTOS

///Leer valor de atributo

console.log(emailInput.getAttribute("type"));
console.log(passInput.getAttribute("type"));

/// Establecer el valor de un atributo

button.setAttribute("disabled", true); //si no lo tiene, se lo pone (Con atributos booleanos, el valor es true)

passInput.setAttribute("type", "text"); //si lo tiene, lo cambia

/// Comprobar si tiene el atributo

console.log(nameInput.hasAttribute("required")); //false
console.log(emailInput.hasAttribute("required")); //true

///Eliminar el atributo

reset.removeAttribute("disabled");

/////////////////////////

function togglePassView() {
  if (passInput.getAttribute("type") === "password") {
    passInput.setAttribute("type", "text");
  } else {
    passInput.setAttribute("type", "password");
  }
}

function checkForm() {
  //Si no hay nada escrito en los inputs, su value es string vacio que es falsy
  //Un solo false en una condicion con &&, hace que toda la condicion sea false
  //(Con que un input esté vacio, no se ejecuta el if)
  if (nameInput.value && emailInput.value && passInput.value) {
    console.log("se puede enviar");
    button.removeAttribute("disabled");
  } else {
    button.setAttribute("disabled", true);
    console.log("Faltan campos");
  }
}

///////////////////////
//Atributos personalizados
//Objeto dataset

//leer
let parrafo = document.querySelector("p");
console.log(parrafo);

console.log(parrafo.dataset);
console.log(parrafo.dataset.author);

let { author, hora } = parrafo.dataset;
console.log(author, hora);

parrafo.textContent = `Parrafo escrito por ${author} a las ${hora}`;

//Escribir

let ahora = new Date();

parrafo.dataset.hora = `${ahora.getHours()}:${ahora.getMinutes()}`; //"21:50"; //si está lo cambia

parrafo.dataset.ubi = "A Coruña"; //si no está, lo añade

//Hay que volver a guardar los datos ya que las variables tienen el valor que tenian cuando se declararon
let { hora: hora2, ubi } = parrafo.dataset;
console.log(author, hora);

parrafo.textContent = `Parrafo escrito por ${author} a las ${hora2} en ${ubi}`;
