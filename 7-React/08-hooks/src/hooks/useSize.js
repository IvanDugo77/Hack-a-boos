import { useEffect, useState } from "react";

const useSize = () => {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };

    // Asocio handler a evento resize de windows cuando se visualiza el componente
    window.addEventListener("resize", handleResize);

    // Función de limpieza que se ejecuta cuando el componente se desmonta,
    // quita el handleResize asociado al evento resize de windows
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
};

export default useSize;
