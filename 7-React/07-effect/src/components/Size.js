import { useEffect, useState } from "react";

// Componente Size que pinta el tamaño del viewport
// Casos de uso: formato pantalla no soportado, mensaje de poner en landscape el móvil ...
const Size = () => {
  // Defino estado donde guardar el tamaño viewport
  const [size, setSize] = useState(
    `${window.innerWidth} x ${window.innerHeight}`
  );

  useEffect(() => {
    const handleResize = () => {
      // Cambio el estado
      setSize(`${window.innerWidth} x ${window.innerHeight}`);
    };

    // Gestiono resize del objeto window con la función manegadora handleResize
    window.addEventListener("resize", handleResize);

    // Quito la funcion manejadora handleResize cuando el componente se desmonta (no se visualiza)
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // El componente devuelve la resolución actual de la pestaña del browser (viewport)
  return <span>Resolución: {size}</span>;
};

export default Size;
