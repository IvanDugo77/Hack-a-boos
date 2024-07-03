import useSize from "../hooks/useSize";

// Componente Size que pinta el tamaño del viewport
// Casos de uso: formato pantalla no soportado, mensaje de poner en landscape el móvil ...
const Size = () => {
  // custom hook que devuelve el tamaño actual del viewport
  const [width, height] = useSize();

  // console.log("Ancho:", size[0]);
  // console.log("Alto:", size[1]);

  // JSX componente. Visualizo la resolución actual
  return (
    <span>
      Resolución: {width}x{height}
    </span>
  );
};

export default Size;
