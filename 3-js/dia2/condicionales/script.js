"use strict";

let edad = 17;

// IF
/* 
if(condicion){
  //Codigo que se ejecuta si la condicion es true
}
*/

if (edad >= 18) {
  //if(!(edad < 18))

  console.log("es mayor de edad");
}

console.log("fin del if");

// IF ... ELSE
/* 
if(condicion){
  //codigo que se ejecuta si es true
} else {
  //codigo que se ejecuta si no se cumple la condicion
}
*/

if (edad >= 18) {
  console.log("es mayor de edad");
} else {
  console.log("es menor de edad");
}

// IF... ELSE IF
/* 
if(condicion1){
  //codigo que se ejecuta si la condicion1 es true
} else if(condicion2){
  //codigo que se ejecuta si la condicion1 es false pero condicion2 es true
} else if (condicion3){
  //codigo que se ejecuta si las condiciones 1 y 2 son false pero la 3 es true
}...
else{
  //(opcional) codigo que se ejecuta si no se cumple ninguna condición
}
*/
if (edad >= 18) {
  console.log("Acceso al catalogo para adultos");
} else if (edad >= 16) {
  console.log("Acceso al catalogo para mayores de 16");
} else if (edad >= 13) {
  console.log("Acceso al catalogo para mayores de 13");
} else if (edad >= 7) {
  console.log("Acceso al catalogo  para mayores de 7");
} else {
  console.log("Acceso al catalogo para todos los públicos");
}

//Mostrar cierta publicidad si el usuario está en una franja de edad concreta (y de un genero concreto)
if (edad >= 13 && edad < 16 /* && (gender === "male") */) {
  console.log("publicidad de GTA");
}

//Logica detras de else if
/* if (edad >= 18) {
  console.log("Acceso al catalogo para adultos");
} else{
  if(edad >= 16){
    //....
  } else {
    if(edad >= 13){
      //...
    } else {
      if(edad >= 7){
        //...
      } else{
        //...
      }
    }
  }
} */

///////////////

let mascota = "perro";

/* if(mascota === "perro"){
  console.log("guau")
} else if(mascota === "gato"){
  console.log("miau")
} else if(mascota === "pajaro"){
  console.log("pio")
} else {
  console.log("no se que sonido hace")
} */

//SWITCH
/* 
switch(variable){
  case valor1:
    //Codigo que se ejecuta si variable === valor1;
    break;
  
  case valor2:
    //Codigo que se ejecuta si variable === valor2;
    break;

    ....

  default: (opcional)
  //Codigo que se ejecuta si variable no coincide con ningún valor
}
*/

switch (mascota) {
  case "perro":
    console.log("guau");
    break;

  case "gato":
    console.log("miau");
    break;

  case "pajaro":
    console.log("pio");
    break;

  default:
    console.log("No se que sonido hace");
    break;

  case "pez":
    console.log("glu");
    break;
}

switch (mascota) {
  case "perro":
  case "gato":
    console.log(4);
    break;

  case "pajaro":
    console.log(2);
    break;
}

let unit = "m";
let time = 100000;

switch (unit) {
  case "s":
    time /= 60;

  case "m":
    time /= 60;

  case "h":
    time /= 24;
}

console.log("son " + time + " dias");

const foo = 6;
let output = "Output: ";
switch (foo) {
  case 0:
    output += "So ";
  case 1:
    output += "What ";
    output += "Is ";
  case 2:
    output += "Your ";
  case 3:
    output += "Name";
  case 4:
    output += "?";
    console.log(output);
    break;
  case 5:
    output += "!";
    console.log(output);
    break;
  default:
    console.log("Please pick a number from 0 to 5!");
}
