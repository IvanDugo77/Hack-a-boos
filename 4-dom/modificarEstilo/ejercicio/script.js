"use strict";

//Seleccionamos todas las celdas
let celdas = document.querySelectorAll("td");

console.log(celdas);

//Recorremos las celdas y por cada una...
for (let celda of celdas) {
  //Obtenemos la nota (contenido)
  let nota = celda.textContent;

  //Si la nota es mayor o igual a 5...
  if (nota >= 5) {
    //pintamos el texto de verde
    celda.style.color = "green";
  }
  //si no...
  else {
    //pintamos el texto de rojo
    celda.style.color = "red";
  }
}
