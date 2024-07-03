"use strict";

//LOCAL STORAGE
//Mini base de datos del navegador
//Para ver lo que hay: dev tools -> application -> local stotage -> servidor

//CON STRINGS
//(Como JS tiene coercion de tipos, los datos primitivos los guarda como string)

//Escribir (y sobreescribir)
localStorage.setItem("test", true);

let input = document.querySelector("input");
let saveButton = document.querySelector("#save");

function guardar() {
  localStorage.setItem("input", input.value);

  input.value = "";
}

saveButton.addEventListener("click", guardar);

//Leer (siempre devuelve strings)

let test = localStorage.getItem("test");
console.log(JSON.parse(test)); //los datos primitivos se pueden escribir sin mas, pero hay que covertirlos al leer

let inputStorage = localStorage.getItem("input");
console.log(inputStorage);

//Borrar un item

let deleteButton = document.querySelector("#delete");

function remove() {
  //este es el metodo de borrar
  localStorage.removeItem("input");
}

deleteButton.addEventListener("click", remove);

//Borrar todo lo que hay

let cleanButton = document.querySelector("#clean");

function clean() {
  //Este es el metodo para borrar todo
  localStorage.clear();
}

cleanButton.addEventListener("click", clean);

///////////////////////////

//CON ELEMENTOS COMPLEJOS
//Hay que guardarlos como string (JSON)

//Escribir

let miObj = {
  nombre: "Zoe",
  edad: 28,
};

let miObjStr = JSON.stringify(miObj); //Convierto a string

localStorage.setItem("obj", miObjStr); //guardo ese string

let miArray = ["rojo", "verde", "azul"];

localStorage.setItem("array", JSON.stringify(miArray)); //en un solo paso (mete al localStorage convirtiendo a string)

//Leer

let objStorageStr = localStorage.getItem("obj"); //leemos del localStorage

let objStorage = JSON.parse(objStorageStr); //convierto de nuevo a objeto

console.log(objStorage);

let arrayStorage = JSON.parse(localStorage.getItem("array")); //en un solo paso (convierte a array lo que lee del localSotrage)

console.log(arrayStorage);
