"use strict";

//LEER EL FORMULARIO

////Seleccionar formualrios

let [form] = document.forms; //let form = document.forms[0];

console.log(form);

////Seleccionar elementos dentro del form

console.log(form.elements); //"objeto" cuyas claves son los names de los campos

let { name, email, check } = form.elements;
/* 
let name = form.elements.name
let email = forms.elements.email
let check = form.elements.check
*/

console.log(name, email, check);

function leerForm(e) {
  //Evitamos que se refresque la pagina (comportamiento por defecto)
  e.preventDefault();

  //Practicamente todos los campos se leen con su propiedad value
  console.log(name.value);
  console.log(email.value);

  //El checkbox se lee con su propiedad checked
  console.log(check.checked);

  //Lo habitual es limpiar los campos despues de enviar

  name.value = "";
  email.value = "";
  check.checked = false;
}

//gestionar el evento submit (el envio) del formulario
form.addEventListener("submit", leerForm);

/* //No es recomendable hacerlo con el evento del botón, ya que  no hará las comprobaciones de HTML
//(campos required cubiertos, campos de email son emails, etc)
let button = document.querySelector("button");
button.addEventListener("click", leerForm);
 */
