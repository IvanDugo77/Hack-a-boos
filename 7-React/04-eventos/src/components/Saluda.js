export const Saluda = ({ nombre = "mundo" }) => {
  // Funcion que se ejecuta al click en el botón
  const handleClick = () => {
    console.log(`Hola ${nombre}!!!`);
  };

  // return <button onClick={handleClick}>{"Saluda " + nombre}</button>;
  return <button onClick={handleClick}>{`Saluda ${nombre}`}</button>;
};

// export default Saluda;
