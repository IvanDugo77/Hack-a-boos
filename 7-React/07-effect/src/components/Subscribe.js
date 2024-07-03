import { useState, useEffect } from "react";

// Ejemplo que se usó para explicar useEffect

const Subscribe = () => {
  // Defino estado
  const [counter, setCounter] = useState(0);

  // El codigo de la callback se ejecuta cuando el componente se visualiza ([])
  useEffect(() => {
    console.log("El componente se monta!");

    // La funcion que devuleve el return de la callback de useEffect de ejecuta cuando el componente se desmonta (acaba de visualizarse)
    return () => {
      console.log("Esto se ejecuta cuando el componente se desmonta");
    };
  }, []);

  //console.log("Fuera de use effect!");

  // JSX componente
  return (
    <button
      onClick={() => {
        // Cambio estado (incremento counter)
        setCounter(counter + 1);
      }}
    >
      Click!
    </button>
  );
};

export default Subscribe;
