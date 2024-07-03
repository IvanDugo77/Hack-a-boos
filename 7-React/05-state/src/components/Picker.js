// http://xahlee.info/comp/unicode_arrows.html
import { useState } from "react";

// Componente Picker dinamico (con status y eventos)
const Picker = ({ defaultValue }) => {
  //let value = 0;

  // Estado en React. Si no guardo value en un estado
  // el componente no se actualizaría (re-rendering)
  const [value, setValue] = useState(defaultValue);

  // Este código se ejecuta cuando se crea el componente por la primera vez
  // en la página y cuando cambia un estado
  console.log("Rendering...");

  // Función manejadora del evento click en el button "⇧"
  const handlePlus = () => {
    //value += 1;
    // actualizo el estado value, solo puedo hacerlo con setValue, sumando al
    // valor anterior un 1
    setValue(value + 1);
    // console.log(value);
  };

  // Función manejadora del evento click en el button "⇩"
  const handleMinus = () => {
    // value -= 1;
    // console.log(value);
    // actualizo el estado value, solo puedo hacerlo con setValue, restando al
    // valor anterior un 1
    setValue(value - 1);
  };

  // Función manejadora del evento click en el button "reset"
  const handleReset = () => {
    // actualizo el estado value, solo puedo hacerlo con setValue,
    // poniendo el defaultValue
    setValue(defaultValue);
    // NO!!!! value = defaultValue;
  };

  // Devuelvo el JSX de componente
  return (
    <div>
      <span>{value}</span>
      <button onClick={handlePlus}>⇧</button>
      <button onClick={handleMinus}>⇩</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Picker;
