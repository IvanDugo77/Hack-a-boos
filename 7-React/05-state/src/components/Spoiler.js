import { useState } from "react";

import "./Spoiler.css";

// Componente que muestra los children si show es true.
// Show y children son 2 props. children es una prop especial (contenido del componente Spoiler,
// lo que está entre la abertura y cierre de Spoiler)
const Spoiler = ({ children }) => {
  // children = <article>...el profesor Stefano!</article>
  const [show, setShow] = useState(false);

  return (
    <span onClick={() => setShow(!show)} className="spoiler">
      {show === true ? children : "..."}
    </span>
  );
};

export default Spoiler;
