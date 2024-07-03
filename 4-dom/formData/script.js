"use strict";

//FORM DATA

//Permite crear un "objeto" a partir de un formulario

let [form] = document.forms; //let form = document.forms[0]

console.log(form);

function leerForm(e) {
  //Paramos el comportamiento por defecto para que no recargue
  e.preventDefault();

  let data = new FormData(form);

  //Leer un campo
  console.log(data.get("name"));

  //Añadir pares clave-valor
  data.append("date", new Date());

  //Cambiar datos
  data.set("email", "alguien@sitio.com");

  //Borrar datos
  data.delete("check");

  //Convertir a objeto
  let dataObj = Object.fromEntries(data.entries());

  console.log(dataObj);
  console.log(dataObj.email);

  //Limpiar el formulario
  form.reset();
}

form.addEventListener("submit", leerForm);
