import { useState } from "react";
// Componente Like que recibe un valor booblean: true (se pinta ♥ ), false (se pinta ♡)
const Like = () => {
  // Defino un estado para repintar el componente cuando cambie
  const [active, setActive] = useState(true);

  // JSX del componente
  return (
    <span
      onClick={() => {
        // Cambio el valor del estado active, esto permite de repintar el componente
        setActive(!active);
      }}
    >
      {active ? "♥" : "♡"}
    </span>
  );
};

export default Like;
