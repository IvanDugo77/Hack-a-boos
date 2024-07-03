"use strict";

const scopeGlobal = "global";

let cambiante = "global";

const scopeLocal = "global";

console.log(scopeGlobal, cambiante, scopeLocal);

if (true) {
  console.log("");
  console.log("LOCAL 1");

  cambiante = "local1";

  const scopeLocal = "local1";

  console.log(scopeGlobal, cambiante, scopeLocal);

  if (true) {
    console.log("");
    console.log("LOCAL 2:");

    cambiante = "local2";

    const scopeLocal = "local2";

    let dentro = "dentro";

    console.log(scopeGlobal, cambiante, scopeLocal);
  }

  //console.log(dentro); //dentro no existe fuera de local2
}

console.log("");
console.log("GLOBAL:");
console.log(scopeGlobal, cambiante, scopeLocal);

///////////
console.log("");
console.log("");

let edad = 28;

let isAdult;

if (edad >= 18) {
  isAdult = true;
} else {
  isAdult = false;
}

console.log(isAdult);

for (let i = 0; i < 5; i++) {
  let num = 5;
  num = num + 1;
  console.log(num);
}
