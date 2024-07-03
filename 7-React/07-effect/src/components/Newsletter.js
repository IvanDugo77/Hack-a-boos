import { useState, useEffect } from "react";
// import css del componente
import "./Newsletter.css";

// Componente que visualiza children y una modal despues de 5sec
const Newsletter = ({ children }) => {
  // Estado para saber si tengo que enseñar modal
  const [show, setShow] = useState(false);

  // La callback se ejecuta cuando el componente se visualiza ([])
  useEffect(() => {
    // Creo un timeout de 5sec que permite se hacer  setShow(true)
    // al pasar de 5 segundos
    const time = setTimeout(() => {
      setShow(true);
    }, 5000);

    // Limpieza cuiando el componente se desmonta
    return () => clearTimeout(time);
  }, []);

  return (
    <>
      {children}
      {/* Cualdo show es true muestro el spam!!! La modal con "Subscibete a nuestra newletter" */}
      {show && (
        <div onClick={() => setShow(false)} className="modal-bg">
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="modal-fg"
          >
            Subscibete a nuestra newletter
          </div>
        </div>
      )}
    </>
  );
};

export default Newsletter;
