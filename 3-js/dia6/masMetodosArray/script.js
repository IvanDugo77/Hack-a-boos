"use strict";

let frutas = [
  "fresa",
  "pera",
  "manzana",
  "pera",
  "naranja",
  "piña",
  "melocotón",
  "ciruela",
  "fresa",
  "mandarina",
];

// YA HEMOS VISTO LENGTH, PUSH Y UNSHIFT

//.indexOf(elemento)
//NO MODIFICA
//Nos devuelve el primer indice del elemento
//Si no lo encuentra, devuelve -1
//Acepta un segundo parámetro que es el punto de inicio

console.log(frutas.indexOf("pera"));
console.log(frutas[1]);
//console.log(frutas[frutas.indexOf("pera")]);
console.log(frutas.indexOf("pera", 2)); //se salta los dos primeros elementos

console.log(frutas.indexOf("limón"));

////////
//.lastIndexOf(elemento)
//NO MODIFICA
//Lo mismo, pero empezando a mirar por el final
console.log(frutas.lastIndexOf("pera"));
console.log(frutas.lastIndexOf("pera", 2)); //solo mira del 2 hacia delante

//////////
//.pop()
//MODIFICA
//Elimina y devuelve el ultimo elemento del array

let ultimo = frutas.pop();
console.log(frutas);
console.log(ultimo);

let ultimo2 = frutas.pop();
console.log(frutas);
console.log(ultimo);

///////
//.shift()
//MODIFICA
//Elimina y devuelve el primer elemento del array

let primero = frutas.shift();
console.log(frutas);
console.log(primero);

///////
//.reverse()
//MODIFICA
// Le da la vuelta al array

frutas.reverse();
console.log(frutas);

////
//.join(separador)
//NO MODIFICA
//Devuelve una string resultado de concatenar todos el elementos con el separador en medio
//Por defecto, el separador es una coma

console.log(frutas.join());
console.log(frutas.join(", "));
console.log(frutas.join("")); //pega los elementos, no pone separadores

////////
//.slice(principio, fin)
//NO MODIFICA
//Devuelve un array cuyo contenido será una copia de los elementos que haya entre el principio (incluido) hasta el final (no incluido)

console.log(frutas.slice(1, 3));

console.log(frutas.slice(2)); //si no indicamos final, va hasta el final del array

console.log(frutas);

//////////
//.splice(principio, cantidad, nuevo_item)
//MODIFICA
//Elimina y devuelve (un array con) la cantidad de elementos que indiquemos desde el punto de inicio que indiquemos
//Opcionalmente, podemos añadir un tercer parametro (o mas) para añadir nuevos elementos en el punto de inicio indicado

let trozo = frutas.splice(1, 2);

console.log(trozo);
console.log(frutas);

frutas.splice(1, 3, "fresa");

console.log(frutas);

frutas.splice(1, 0, "mandarina", "papaya");

console.log(frutas);
