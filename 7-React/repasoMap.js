"use strict";

const personas = ["Stefano", "Noemi", "Alba", "Leo"];

const newArray = personas.map((persona, index) => {
  // return "hola"
  // return persona
  //return `${persona} (${index})`; // "Stefano (0)"
  return {
    nombre: persona,
    pos: index,
  };
});

console.log(newArray);
