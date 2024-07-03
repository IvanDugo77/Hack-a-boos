import useHora from "../hooks/useHora";

// Componente Hora
const Hora = () => {
  // Custom hook useHora que devuelve la hora actual cada segundo
  const hora = useHora();

  // if (true){
  //   // no puedo poner un hook (que sea custom o no) en un condicional o for
  //   const [hora] = useHora();
  // }

  // prueba handleClickHora
  const handleClickHora = () => {
    // no puedo poner en un handler un hook (que sea custom o no)
    //const [hora] = useHora();
    console.log("Hola");
  };

  // JSX componente. Pinto la hora actual
  return <span onClick={handleClickHora}>{hora}</span>;
};

export default Hora;
