"use strict";

//Crea una función que reciba un número como parámetro
//y devuelva true si es par o false si es impar
//Un numero es par si al dividir entre dos no da resto
// 8 -> true
// 3 -> false

function esPar(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(esPar(8));
console.log(esPar(3));

//Crea un función que reciba dos numeros como parámetros
//Devuelve true si el primero es divisible entre el segundo. False si no.
//Un numero es divisible entre otro si al devidirlo no da resto
//9, 3 -> true
// 8, 3 -> false

//Crea una función que reciba un número y devuelva true si es primo y false si no
//Un numero es primo si no es divisible entre ningun número entre 2 y el anterior a él mismo
//(Podemos dar por hecho que no va a recibir números inferiores a 2)
//13 -> true
//14 -> false

//Crea una función que reciba un número como parámetro y saque por consola todos los numeros primos hasta el (incluido)
//15 -> 2, 3, 5, 7, 11, 13
