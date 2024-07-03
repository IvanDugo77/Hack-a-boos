"use strict";

const animales = [
  "perro",
  "gato",
  "conejo",
  "loro",
  "delfín",
  "koala",
  "gato",
  "caballo",
  "gato",
  "pez",
];
console.log(animales);

//NO MODIFICAN:

//.length
//Es una propiedad, devuelve la cantidad de elementos del array

console.log(animales.length);

//indexOf(el)
//Devuelve el indice de la primera aparicion del elemento

console.log(animales.indexOf("gato")); //1

////Si no lo encuentra, devuelve -1
console.log(animales.indexOf("camello")); //-1

//// Admite un segundo parámetro para indicar donde empezar

console.log(animales.indexOf("gato", 2)); //6

//lastIndexOf(el)
//Igual que el metodo anterior, pero empezando a buscar por el final

console.log(animales.lastIndexOf("gato")); //6

////Si no lo encuentra, devuelve -1
console.log(animales.lastIndexOf("camello")); //-1

//// Admite un segundo parámetro para indicar donde empezar

console.log(animales.lastIndexOf("gato", 7)); //6

//join(separador)
//devuelve una string concatenando todos los elementos del array con el separador en medio

console.log(animales.join()); //añade una , en medio

console.log(animales.join("")); //pega todos los elementos

console.log(animales.join(", ")); //añade ", " en medio

//slice(start, end)
//Devuelve una copia de un fragmento del array empezando en el start (incluido) y acabando en el end (no incluido)

console.log(animales.slice(2, 6));

///// Si no indicamos el end, va hasta el final

console.log(animales.slice(6));

//includes(el)
//Devuelve true si el array incluye el elemento, false si no

console.log(animales.includes("koala"));
console.log(animales.includes("camello"));

////////////////////////

//MODIFICAN EL ORIGINAL

//push(el)
//añade elemetos al final

animales.push("mariposa");
console.log(animales);

animales.push("nutria", "ballena");
console.log(animales);

//unshift(el)
//añade elementos al principio

animales.unshift("elefante", "oso");
console.log(animales);

//pop()
//Elimina y devuelve el ultimo elemento

const ultimo = animales.pop();

console.log(ultimo);

console.log(animales);

animales.pop();
console.log(animales);

//shift()
//Elimina y devuelve el primer elemento

animales.shift();
console.log(animales);

const primero = animales.shift();

console.log(primero);

console.log(animales);

//.reverse()
//le da la vuelta al array

animales.reverse();

console.log(animales);

//.splice(start, cantidad)
//Elimina y devuelve (siempre un array) un fragmento del array empezando en el start y con la cantidad de elementos indicada

let trozo = animales.splice(3, 3);

console.log(trozo);

console.log(animales);

////// Permite añadir un tercer parametro (o mas) que serán los elementos que sustituirán al trozo

animales.splice(4, 2, "periquito", "ratón");

console.log(animales);

////La cantidad de elementos que quito no tiene por qué ser igual a la que meto

//// El truco para meter elementos por el medio es usar splice, eliminando 0 elementos

animales.splice(3, 0, "serpiente");

console.log(animales);
