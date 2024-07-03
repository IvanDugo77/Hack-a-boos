// Componente Echo que imprime a consola el contenido que voy escribiendo en el input
// tranformandolo en mayuscula
const Echo = () => {
  // Función manejadora asociada al evento Change del input
  const handleChange = (e) => {
    //console.dir(e);
    const upperStr = e.target.value.toUpperCase();
    console.log(upperStr);
  };

  // JSX componente
  return <input placeholder="Escribir..." onChange={handleChange} />;
};

export default Echo;
