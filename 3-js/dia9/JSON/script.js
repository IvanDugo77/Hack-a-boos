"use strict";

//JSON
//JavaScript Object Notation

//Es la versión en texto plano de estructuras complejas (objetos y arrays) de javascript

let miObj = {
  nombre: "Zoe",
  edad: 28,
  email: "zoe.porta.garcia@hackaboss.com",
  mascota: "Nymeria",
  ciudad: "A Coruña",
};

//Convertir de JS a JSON

let jsonObj = JSON.stringify(miObj);

console.log(miObj);
console.log(jsonObj);

//Convertir de JSON a JS

let otroObj = JSON.parse(jsonObj);

console.log(otroObj);
console.log(otroObj.nombre);

////////////
// Convertir a JSON y de vuelta a JS es un truco para hacer copias profundas

otroObj.mascota = "Buffy";

console.log(otroObj);
console.log(miObj);

/////////////
//JSON no soporta estructuras circulares
//(Objetos que referencian a objetos que referencian al primer objeto)

let mascota = {
  nombre: "Nymeria",
  color: "gris",
  especie: "gato",
  dueno: miObj,
};

miObj.mascota = mascota;

console.log(miObj);

//let JSONcircular = JSON.stringify(miObj); //error

////////////////////////////////

//Nuevo metodo para hacer copias profundas
//Si que soporta estructuras circulares

let copiaProfunda = structuredClone(miObj);

copiaProfunda.edad = 29;
copiaProfunda.mascota.nombre = "Buffy";
console.log(copiaProfunda);
console.log(miObj);
