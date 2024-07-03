"use strict";

let miArray = ["rojo", "verde", "azul"];

//LENGTH (es una propiedad, no un metodo)
//La longitud ("cantidad de elementos") del array
//Siempre es la ultima posición +1

console.log(miArray.length);
/* miArray[7] = "violeta"; */
console.log(miArray);

///////////////
// PUSH
//Añade uno o varios elementos el final de un array
//Devuelve el nuevo length del array

console.log(miArray.push("amarillo", "naranja"));

//miArray.push(prompt("Introduce un color"));

console.log(miArray);

/////////////
//UNSHIFT
//Añade uno o varios elementos al principio del array
//devuelve el nuevo length

console.log(miArray.unshift("granate"));
console.log(miArray);

//////////////
//RECORRER UN ARRAY

//Bucle for (cuando nos interesa el indice)

for (let i = 0; i < miArray.length; i++) {
  //console.log(i);
  console.log(miArray[i]);
  //console.log(`Mi color favorito es el ${miArray[i]}`);

  /*   if (miArray[i] === "azul") {
    console.log("es azul");
  } else {
    console.log("no es azul");
  } */
}

let edades = [12, 58, 1, 32, 19, 15];

for (let i = 0; i < edades.length; i++) {
  if (edades[i] >= 18) {
    console.log(edades[i] + " es mayor de edad");
  } else {
    console.log(edades[i] + " es menor de edad");
  }
}

// for... of

/* 
for(const elemento of array){
  //codigo que se ejecuta por cada elemento
}
*/

for (const color of miArray) {
  console.log(color);

  /*   if (color === "azul") {
    console.log("es azul");
  } */
}

for (const edad of edades) {
  if (edad >= 18) {
    console.log(edad + " es mayor de edad");
  } else {
    console.log(edad + " es menor de edad");
  }
}
