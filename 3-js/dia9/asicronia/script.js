"use script";

//ESTO NO HAY QUE SABERLO:
const myPromise = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    setTimeout(() => {
      resolve(4);
    }, 2000);
  } else {
    setTimeout(() => reject(0), 1000);
  }
});

console.log(myPromise); //pendiente, será 4
console.log(myPromise - 2); // NaN, la promesa aun no tiene valor

// THEN
//El metodo then recibe un callback que a su vez recibe el valor de la promesa si se resuelve correctamente
//Se ejecuta cuando tenemos la respuesta

//CATCH
//El metodo catch recibe un callback que a su vez recibe el valor de la promesa cuando se rechaza
//Se ejecuta cuando se rechaza

//FINALLY
//Recibe un callback, se ejecuta despues del then o el catch

myPromise
  .then((res) => console.log(res - 2))
  .catch((res) => console.error(res))
  .finally(() => {
    console.log("verdadero final");
  });

console.log("final");

/////////////////////////

const numPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(4);
  }, 2000);
});

async function restar(numA, numB) {
  // console.log(numA, numB);
  return numA - numB;
}

numPromise.then((res) =>
  restar(res, 2).then((res) =>
    restar(res, 3).then((res) =>
      restar(res, 6).then((res) =>
        restar(10, res).then((res) => console.log(res))
      )
    )
  )
);

/////////////////
// Funciones asincronas
//Nos permiten usar la palabra reservada await
//Dicha palabra indica a JS que debe esperar al resultado de la promesa

async function funcionAsincrona() {
  let res1 = await numPromise;
  let res2 = await restar(res1, 2);
  let res3 = await restar(res2, 3);
  let res4 = await restar(res3, 6);
  let res5 = await restar(10, res4);

  //console.log(res5);

  return res5;
}

async function imprimir() {
  let num = await funcionAsincrona();

  console.log(num);
}

imprimir();

//console.log(funcionAsincrona(numPromise)); //esto no vale para funciones asincronas

funcionAsincrona().then((res) => console.log(res));

async function puedeFallar() {
  try {
    let num1 = await myPromise;

    let num2 = await restar(num1, 1);

    console.log(num2);
  } catch (e) {
    console.error("la promsea falló");
  }
}

puedeFallar();
