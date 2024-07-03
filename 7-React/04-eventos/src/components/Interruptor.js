// componente Interruptos
const Interruptor = () => {
  const handleChange = (e) => {
    // console.dir(e.target);
    // imprimo a consola se Interruptor es checkeado o no
    // usando operador ternario
    console.log(e.target.checked ? "Encendido" : "Apagado");
  };

  // return del JSX que define el componente
  return <input type="checkbox" onChange={handleChange} />;
};

export default Interruptor;
