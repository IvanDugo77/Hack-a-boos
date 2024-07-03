import { useEffect, useState } from "react";
// Import CSS header
import "./Header.css";

// Componente que pinta un header que se redimensiona si hago scroll vertical
const Header = () => {
  const [y, setY] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => setY(window.scrollY);

    // Asocio handler a evento scroll de windows cuando se visualiza el componente
    window.addEventListener("scroll", handleScroll);

    // Función de limpieza que se ejecuta cuando el componente se desmonta,
    // quita el handleScroll asociado al evento scroll de windows
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // JSX componente. Visualizo el header.
  // Si "y" es distinto que 0 pongo la clase not-up
  return (
    <header className={`cabecera ${y !== 0 ? "not-up" : ""}`}>MyApp</header>
  );
};

export default Header;
