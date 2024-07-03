import { useEffect, useState } from "react";

// Custom hook
const useCowndown = (seconds) => {
  //const seconds = props.seconds;
  //console.log(seconds);
  const [t, setT] = useState(seconds);

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

    // función de limpieza que se ejecuta cuando el componente se desmonta
    return () => {
      console.log("Quito timer");
      clearInterval(timer);
    };
  }, []);

  return t;
};

export default useCowndown;
