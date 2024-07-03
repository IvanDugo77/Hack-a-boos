import { useState } from "react";

// Componente Echo
const Echo = () => {
  const [text, setText] = useState("");

  // JSX componente
  // Ejemplo de input controlado
  // En JSX no for si no htmlFor
  return (
    <>
      <label htmlFor="texto">Input</label>
      <input
        id="texto"
        placeholder="Escribir..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <span>{text.toLocaleUpperCase()}</span>
    </>
  );
};

export default Echo;
