"use strict";

let miString = "Esto es una string.";

//LENGTH
//No es un metodo, es una popiedad
//Indica cuantos caracteres tiene el string

console.log(miString.length);

//toLowerCase()
//Devuelve una copia de la string en minusculas

console.log(miString.toLowerCase());

//toUpperCase()
//Devuelve una copia de la string en mayúsculas
console.log(miString.toUpperCase());

//////Estos métodos son muy útiles cuando queremos hacer comparaciones de strings sin que importen las mayúsculas

let password = "hola";
let userInput = "Hola"; //prompt("Introduce la contraseña")

console.log(userInput === password); //false
console.log(userInput.toLowerCase() === password.toLowerCase()); //true

//////////

//indexOf(substr)
//Devuelve el indice de la primera aparicion de la substring en la string

console.log(miString.indexOf("s"));
console.log(miString.indexOf("str"));

/////Si no lo encuentra, devuelve -1
console.log(miString.indexOf("k")); //-1

///// Admite un segundo parámetro para indicar donde empezar a buscar

console.log(miString.indexOf("s", 2));

//lastIndexOf(substr)
// Exactamente igual a indexOf, pero empezando a buscar por el final

console.log(miString.lastIndexOf("s"));
console.log(miString.lastIndexOf("str"));

/////Si no lo encuentra, devuelve -1
console.log(miString.lastIndexOf("k")); //-1

///// Admite un segundo parámetro para indicar donde empezar a buscar

console.log(miString.lastIndexOf("s", 11));

//.repeat(num)
//Devuelve una nueva string a partir de la repetición de la original el numero de veces indicado
console.log(miString.repeat(3));

//.replace(substr, newSubstr)
//Devuelve una string cambiando la primera aparición del primer argumento, por el segundo

console.log(miString.replace("s", "o"));
console.log(miString.replace("str", "o"));
console.log(miString.replace("s", "bla"));
console.log(miString.replace("una ", ""));

//.replaceAll(substr, newSubstr)
//Lo mismo que el metodo anterior, pero cambia todas las coincidencias

console.log(miString.replaceAll("s", "o"));
console.log(miString.replaceAll("st", ""));

//.split(separador)
//Divide la string por el separador y devuelve un array con los trozos (el separador se elimina)

console.log(miString.split()); //Devuelve un array con un unico elemento (la string entera)

console.log(miString.split("")); //Devuelve un array con cada uno de los caracteres

console.log(miString.split(" ")); //Devuelve un string con cada una de las palabras, sin espacios

//.slice(start, end)
//Devuelve una substring de la original, empezando en el start y acabando en el end (no incluido)

console.log(miString.slice(3, 9));

///// Si no indicamos fin, va hasta el final
console.log(miString.slice(9));
