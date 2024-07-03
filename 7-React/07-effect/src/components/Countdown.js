import { useEffect, useState } from "react";

/* Componente Countdown
Visualiza a pantalla una cuenta atras */
const Countdown = ({ seconds }) => {
  //const seconds = props.seconds;
  //console.log(seconds);
  // Defino estado donde guardo los segundos del countdown (inicializo con lo que me llega en props (seconds))
  const [t, setT] = useState(seconds);

  // La callback se ejecuta cuando se visualiza el componente
  useEffect(() => {
    console.log("Pongo timer");
    // Creo intervallo cuando se visualiza el componente que acutualiza t cada segundo.
    const timer = setInterval(() => {
      console.log("Timer");
      // Solución menos eficiente
      //setT(t - 1); // tendria que añadir la dependencia t al useEffect: [t]

      /* Solución más eficiente.
      Al setT le paso la función que tendrá que ejecutar. React conoce el valor del estado
      si que pasará a la función, como parametro x, el valor del estado */
      setT((x) => (x > 0 ? x - 1 : x));
    }, 1000);

    // Función de limpieza. Cuando se desmonta el componente (acaba de visualizarse)
    // hago el clearInterval
    return () => {
      console.log("Quito timer");
      clearInterval(timer);
    };
  }, []);

  // JSX componente. Visualizo el tiempo que queda del countdown
  return <span>{`Faltan ${t} segundos`}</span>;
};

export default Countdown;
