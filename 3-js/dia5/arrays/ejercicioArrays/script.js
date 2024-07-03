"use strict";

//Crea una función que reciba dos arrays y devuelva true si tienen exactamente el mismo contenido (en el mismo orden) y false si no

let arr1 = ["rojo", "azul", "verde"]; //a comparar
let arr2 = ["rojo", "azul", "verde"]; //true
let arr3 = ["rojo", "amarillo", "verde"]; //false
let arr4 = ["rojo", "azul", "verde", "amarillo"]; //false

function comparar(arrA, arrB) {
  //logica de la compracion
}

console.log(comparar(arr1, arr2)); //true
console.log(comparar(arr1, arr3)); //false
console.log(comparar(arr1, arr4)); //false

let arr5 = [1, 2, 3];
let arr6 = [1, 2, 3];

console.log(comparar(arr5, arr6)); //true
