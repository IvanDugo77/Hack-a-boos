import useCowndown from "../hooks/useCowndown";

// Componente Countdown
const Countdown = ({ seconds, otro = "default" }) => {
  /* Repaso props:
  con <Countdown seconds={10} otro="hola" /> imprime "hola"
  con <Countdown seconds={20}/> imprime "default" */
  console.log(otro);

  // Custom hook useCowndown, paso los seconds como parametro
  // El hook devuelve el "valor del countdown" para que pueda visualizarlo en el componente
  const t = useCowndown(seconds);

  // JSX componente. Visualizo el tiempo que queda del countdown
  return <span>{`Faltan ${t} segundos`}</span>;
};

export default Countdown;
