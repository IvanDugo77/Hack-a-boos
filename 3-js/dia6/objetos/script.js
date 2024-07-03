"use strict";

//OBJETOS
//Igual que los arrays, son estructuras que contienen una lista de datos
//A diferencia de los arrays, no tienen orden
// Lo que tiene, son nombres (claves)
/* 
{
  clave: valor,
  clave2: valor2,
  clave3: valor3
}
*/

//Los valores pueden ser cualquier cosa (strings, numeros, funciones, arrays, objetos...)

//Cuando son datos, se llaman propiedades, cuando son funciones se llaman métodos

let usuario = {
  nombre: "Zoe",
  edad: 28,
  email: "zoe.porta.garcia@hackaboss.com",
  saludar: () => {
    console.log("HOLA!");
  },
  coloresFavoritos: ["morado", "azul", "negro"],
  mascota: {
    nombre: "Nymeria",
    especie: "gato",
    color: "gris",
  },
};

console.log(usuario);

let falsoArray = {
  //Ojo, las claves no deberian empezar por numero
  //Siguen las normas de las variables
  0: "rojo",
  1: "azul",
  2: "verde",
  length: 3,
  push: () => {},
};

console.log(falsoArray);

let array = ["rojo", "azul", "verde"];
console.log(array);

////////////////////////
//Acceder a datos del objetos

//SINTAXIS DEL PUNTO
//Para usarla, debemos utilizar la clave literal

console.log(usuario.coloresFavoritos);
console.log(usuario.coloresFavoritos[1]);

console.log(usuario.nombre);
console.log(usuario.saludar);

usuario.saludar();

console.log(usuario.mascota);

console.log(usuario.mascota.nombre);

let mascota = usuario.mascota;
console.log(mascota.especie);

//console.log(falsoArray.0) //error

console.log("///////////");
///////
// SINTAXIS DE CORCHETES
//En los corchetes, ponemos una expresión
//JS evalúa la expresion y busca la clave que coincida

console.log(falsoArray[0]);

console.log(usuario["nombre"]);

let clave = "edad";

console.log(usuario[clave]);

//////////
//MODIFICAR UN VALOR

usuario.edad = 29;

console.log(usuario);

//AÑADIR UN VALOR
console.log(usuario.ciudad);
usuario.ciudad = "A Coruña";

console.log(usuario);

//ELIMINAR UN VALOR

delete usuario.email;

console.log(usuario);
