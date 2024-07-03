"use strict";

//Crea una función que reciba dos arrays y devuelva true si tienen exactamente el mismo contenido (en el mismo orden) y false si no

let arr1 = ["rojo", "verde", "azul"];
let arr2 = ["rojo", "verde", "azul"];
let arr3 = ["rojo", "amarillo", "azul"];
let arr4 = ["rojo", "verde", "azul", "amarillo"];

function comparar(arrA, arrB) {
  //logica
  if (arrA.length !== arrB.length) {
    return false;
  }

  for (let i = 0; i < arrA.length; i++) {
    console.log(i);
    console.log(arrA[i]);
    console.log(arrB[i]);

    if (arrA[i] !== arrB[i]) {
      console.log("distinto");
      return false;
    }
  }

  return true;
}

//Llamadas a la función
console.log(comparar(arr1, arr2)); //true
console.log(comparar(arr1, arr3)); //false
console.log(comparar(arr1, arr4)); //false

/* 
- comparar si miden lo mismo
  - Si la longitud de A es distinto a la longitud de B son distintos -> devuelvo false
- comparar cada elemento
  -recorrer uno de los arrays
  -por cada elemento, compararlo con la misma posicion del otro array
  - si el contenido del array A en la posicion X es distinto del contenido del array B en la misma posición, son disntintos
    - devolver false
-Si no hemos encontrado diferencias, son iguales
*/

let arr5 = [1, 2, 3];
let arr6 = [1, 2, 3];

/* 
for (const color of arr1) {
  console.log(color);
}

for (let i = 0; i < arr1.length; i++) {
  const color = arr1[i];
  console.log(color);
}
 */
