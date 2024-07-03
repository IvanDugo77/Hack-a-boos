"use strict";

//Selecciono los anuncions
let ads = document.querySelectorAll("article");

console.log(ads);

//Funcion para cuando hago click en los anuncios (abren una pestaña nueva)
function handleAdClick() {
  window.open("http://google.com");
}

//Asocioamos la funcion al evento click en cada anuncio
for (const ad of ads) {
  ad.addEventListener("click", handleAdClick);
}

//Selecciono los botones por su id
let botonBubbles = document.querySelector("#bubbling");

let botonNoBubbles = document.querySelector("#nobubbling");

//Esta funcion elimina el anuncio pero abre la nueva pestaña igualmente porque el evento (click) pasa del boton al anuncio
function handleBubbleClose(e) {
  //Selecciono el anuncio correspondiente
  //(el padre del target, el elemento al que le hice click)
  let ad = e.target.parentElement;

  //Borro el anuncio
  ad.remove();
}

//Asocio la funcion al evento click del botón correspondiente
botonBubbles.addEventListener("click", handleBubbleClose);

//Esta funcion elimina el anuncio sin dejar que se abra porque no deja pasar el evento click al anuncio
function handleNoBubbleClose(e) {
  //Esto es lo que evita que el evento escale al padre
  e.stopPropagation();

  //Selecciono el anuncio correspondiente
  //(el padre del target, el elemento al que le hice click)
  let ad = e.target.parentElement;

  //Borro el anuncio
  ad.remove();
}

//Asocio la funcion al evento click del botón correspondiente
botonNoBubbles.addEventListener("click", handleNoBubbleClose);
