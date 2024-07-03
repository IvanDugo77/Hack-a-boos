"use strict";

function sumaClasica(a, b) {
  //logica
  return a + b;
}

console.log(sumaClasica(4, 5));

function ejecutar(callback) {
  console.log(callback(4, 5));
}

//ARROW FUNCTION

const sumaArrow = (a, b) => {
  //logica
  return a + b;
};

console.log(sumaArrow(4, 5));

ejecutar((a, b) => {
  //logica
  return a + b;
});

//RETURN IMPLICITO

const sumaImplicita = (a, b) => a + b;

console.log(sumaImplicita(4, 5));

ejecutar((a, b) => a + b);
