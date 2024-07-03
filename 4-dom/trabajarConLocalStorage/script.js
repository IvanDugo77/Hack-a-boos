"use script";

//Seleccionamos los elementos
let input = document.querySelector("input");
let button = document.querySelector("button");

//Creo la variable que necesito con el tipo que necesito
//(En este caso un array vacio)
let lista = [];

//Leo los datos del localStorage
let savedLista = localStorage.getItem("listaCompra");
console.log(savedLista);

//Si habia datos en el localStorage
if (savedLista) {
  //Los convierto y guardo en la variable que voy a usar (en este caso, lista)
  lista = JSON.parse(savedLista);
}

console.log(lista);

//funcion para añadir cosas
function save() {
  //añado a la lista lo que haya en el input
  lista.push(input.value);

  //limpio el input
  input.value = "";

  //Convierto la lista a string
  let listaStr = JSON.stringify(lista);

  //lo guardo en el localStroage
  localStorage.setItem("listaCompra", listaStr);

  console.log(lista);
}

button.addEventListener("click", save);
