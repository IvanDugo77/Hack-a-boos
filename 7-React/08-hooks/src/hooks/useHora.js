import { useState, useEffect } from "react";

// custom Hook
const useHora = () => {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    // Creo intervallo cuando se visualiza el componente
    const timer = setInterval(() => {
      const strHora = new Date().toLocaleTimeString();
      // Cada segundo cambio el estado (hora)
      setHora(strHora);
    }, 1000);

    // Función de limpieza que se ejecuta cuando el componente se desmonta
    // Elimina interval
    return () => clearInterval(timer);
  }, []);

  // devuelvo la hora actual
  return hora;
};

export default useHora;
