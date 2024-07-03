import { useState } from "react";

// Componente Calculadora que concatena string
const Calculadora = () => {
  // Defino estado iniciandolo a ""
  const [value, setValue] = useState("");

  /*   const handler0 = () => {
    setValue(value + "0");
  };

  const handler1 = () => {
    setValue(value + "1");
  };

  const handler2 = () => {
    setValue(value + "2");
  };

  const handler3 = () => {
    setValue(value + "3");
  }; */

  // Array con elenco de los botones
  const buttons = ["0", "1", "2", "3", "4"];

  // JSX componente
  return (
    <div>
      {/* <button onClick={handler0}>0</button>
      <button onClick={handler1}>1</button>
      <button onClick={handler2}>2</button>
      <button onClick={handler3}>3</button> */}
      {
        // recorro array con map y creo cada uno de los botones
        buttons.map((v) => {
          return (
            <button
              key={v}
              onClick={() => {
                // La funcion manejadora del evento click (del button) cambia
                // el valor de value concatenando "v"
                setValue(value + v);
              }}
            >
              {v}
            </button>
          );
        })
      }
      {value}
    </div>
  );
};

export default Calculadora;
