"use strict";

let modal = document.createElement("div");

console.log(modal);

modal.setAttribute("id", "modal");

modal.innerHTML = `
<div>
<h2>Esto es un modal</h2>
<p>Se cerrará en unos segundos</p>
</div>
`;

let body = document.querySelector("body");

//body.append(modal);

setTimeout(() => body.append(modal), 2000);

setTimeout(() => modal.remove(), 4000);
