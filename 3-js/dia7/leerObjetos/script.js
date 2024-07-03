"use strict";

const people = {
  Maria: 20,
  Ana: 14,
  Luis: 16,
  Pepe: 35,
  Manuel: 50,
  Teresa: 12,
  Daniel: 27,
  Irene: 23,
  Alex: 10,
};

function imprimir(name, edad) {
  console.log(name, edad);
}

for (const key in people) {
  /*   console.log(key); //nombres
  console.log(people[key]); //edades
  console.log(`${people[key]}`); //edades con conversion a string innecesaria */

  //imprimir(key, `${people[key]}`);
  imprimir(key, people[key]);
}

console.log(people.Maria);
console.log(people["Maria"]);

const pizzas = [
  "margarita", //0
  "cuatro quesos", //1
  "prosciutto", //2
  "carbonara", //3
  "barbacoa", //4
  "tropical", //5
];
/* 
0 - 1
0 - 2
0 - 3
0 - 4
0 - 5
1 - 2
1 - 3
1 - 4
1 - 5
2 - 3
2 - 4
2 - 5
3 - 4
3 - 5
4 - 5

 */
