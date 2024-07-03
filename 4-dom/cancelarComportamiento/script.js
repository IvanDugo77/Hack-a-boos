"use strict";

//EVITAR COMPORTAMIENTO POR DEFECTO
//Algunos eventos en ciertos elementos tienen comportamiento por defecto
//(Por ejemplo, click en enlaces)

let enlaces = document.querySelectorAll("a");

//Se puede evitar con e.preventDefault()

function handleLinkClick(e) {
  e.preventDefault();

  let link = e.target;

  let text = link.textContent;

  let url = link.getAttribute("href");

  let continuar = confirm(`Seguro que quieres acceder a ${text}`);

  if (continuar) {
    window.open(url);
  } else {
    console.log("cancelando...");
  }
}

for (let link of enlaces) {
  link.addEventListener("click", handleLinkClick);
}
