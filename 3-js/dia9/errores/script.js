"use strict";

//ATRAPAR ERRORES:
//TRY...CATCH

function saltaError() {
  try {
    console.log("esto lo hace bien"); //codigo correcto
    console.log(variableQueNoExiste); //error
    console.log("Esto no lo hace"); //debajo de un error, no se ejecuta
  } catch (error) {
    console.error(error.message);
  }
}

saltaError();

//FINALLY
//Cuando hay un trozo de código que queremos que se ejecute al final, haya error o no, lo ponemos en el finally

let conexion;

function obtenerDatos() {
  try {
    conexion = true;
    console.log(conexion);
    console.log("Pedir datos");
    console.log("mandar datos");
  } catch (e) {
    console.error(e.message);
  } finally {
    //Funcione o falle la petición, queremos cerrar la conexion

    conexion = false;
    console.log(conexion);
  }
}

obtenerDatos();

// LANZAR ERRORES:
//TRHOW

let usuario = {
  //name: "Zoe",
};

function saludar(user) {
  try {
    if (!user || !usuario.name) {
      throw new Error("No hay usuario");
    }
    console.log(`Hola ${user.name}`);
  } catch (e) {
    console.error(e.message);
  }
}

saludar(usuario);

function resta() {
  try {
    let numA = prompt("introduce un numero");
    let numB = prompt("introduce otro numero");

    if (isNaN(numA) || isNaN(numB)) {
      throw new Error("lo introducido no son números");
    }

    console.log(numA - numB);
  } catch (e) {
    console.error("error: " + e.message);
  }
}

resta();

console.log("final");
