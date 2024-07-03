"use strict";

let titulo = document.querySelector("h1");

//CLASES (propiedad classList)
console.log(titulo.classList); //especie de array con todas las clases que tiene aplicadas

//Añadir clases

titulo.classList.add("dos", "tres");

//Quitar clases
titulo.classList.remove("uno");

//Alternar clase
//(Si la tiene se la quita, si  no la tiene, se la pone)

titulo.classList.toggle("uno"); //no la tenia, se la pone

titulo.classList.toggle("dos"); //la tenia, se la quita

//Comprobar si tiene la clase

console.log(titulo.classList.contains("tres")); //true

//Reemplazar clases

titulo.classList.replace("tres", "dos"); //cambiamos la clase 3 por la 2

titulo.classList.replace("cuatro", "tres"); //no se aplica la 3, porque no tenia la 4

/////////////////////////
//En vez de classList, podemos usar className, pero eso reemplazare TODO el contenido del atributo class

titulo.className = "tres dos"; //da igual lo que tuviera, tendrá las clases 3 y 2

titulo.className = ""; //asi borramos todas las clases
