"use strict";

//Igual (===)
//Diferente (!==)
//Mayor estricto (>)
//Mayor o igual (>=)
//Menor estricto (<)
//Menor o igual (<=)

// AND (&&) -> si algo es false, el resultado es false

//OR (||) -> si algo es true, el resultado es true

let mascota = "periquito";

if (mascota === "perro") {
  console.log("guau");
}

if (mascota === "perro") {
  console.log("guau");
} else {
  console.log("No es un perro");
}

if (mascota === "perro") {
  console.log("guau");
} else if (mascota === "gato") {
  console.log("miau");
}

switch (mascota) {
  case "perro":
    console.log("guau");
    break;
  case "gato":
    console.log("miau");
    break;

  default:
    console.log("No es ni un perro ni un gato");
}
