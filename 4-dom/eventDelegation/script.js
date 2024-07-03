"use strict";

//EVENT DELEGATION
///Cuando queremos que muchos elementos ejecuten la misma funcion para el mismo evento, podemos ahorrar recursos asociando el evento al padre (asi será solo 1)

//Seleccionamos el padre de los elementos
let ul = document.querySelector("ul");

//Creamos la funcion
function handleLiClick(e) {
  //console.log(e);

  //Lo primero cuando recurrimos al event delegation es comprobar que el target es lo que queremos
  //El metodo matches recibe un selector y devuelve true si el elemento sería seleccionado por ese selector
  if (e.target.matches("li")) {
    console.log("click en el li");

    /*     //El li que activa el evento es el target del evento
    let li = e.target;
    console.log(li);

    //Si no tiene el atributo data-count, se lo añadimos iniciandolo en 1
    if (!li.dataset.count) {
      li.dataset.count = 1;
    }
    //SI lo tiene, lo aumentamos
    else {
      li.dataset.count++;
    }

    //Cambiamos el texto
    li.textContent = `${li.dataset.count} clicks`; */
  } else {
    console.log("no es un li");
  }
}

ul.addEventListener("click", handleLiClick);
