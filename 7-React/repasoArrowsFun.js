"use strict";

console.log(suma(2, 4));

function suma(op1, op2) {
  return op1 + op2;
}

const suma1 = (op1, op2) => {
  return op1 + op2;
};

console.log(suma1(2, 4));
const suma2 = (op1, op2) => op1 + op2;

console.log(suma2(2, 4));
