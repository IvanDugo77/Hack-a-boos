import { useState, useEffect } from "react";

// Componente Hora que pinta la hora actual cada segundo
const Hora = () => {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    // Creo intervallo cuando se visualiza el componente
    const timer = setInterval(() => {
      const strHora = new Date().toLocaleTimeString();
      console.log(strHora);
      // Cada segundo cambio el estado (hora)
      setHora(strHora);
    }, 1000);

    // Función de limpieza que se ejecuta cuando el componente se desmonta
    // Elimina interval
    return () => clearInterval(timer);
  }, []);

  // JSX componente. Visualizo la hora (estado)
  return <span>{hora}</span>;
};

export default Hora;
