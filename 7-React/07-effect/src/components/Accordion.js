import { useState } from "react";

// Componente Accordion
// Componente que visualiza la prop children si se hace click en un botón
// (texto pasado por props: "text")
// o oculta children si se vuelve a hacer click en el boton
const Accordion = ({ text, children }) => {
  // Estado para saber si tengo que enseñar o ocultar children
  const [show, setShow] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          // A cada click asigno a show el valor anterior negado (!show)
          setShow(!show);
        }}
      >
        {text}
      </button>
      {/* Rendering condicional. Muestro children solo si show es true */}
      <div>{show && children}</div>
    </div>
  );
};

export default Accordion;
