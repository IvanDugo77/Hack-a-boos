// Componente Like que recibe un valor booblean: true (se pinta ♥ ), false (se pinta ♡)
// Añadiremos dinamicidad cuando hablaremos de eventos y state
const Like = ({ active }) => {
  return <span>{active === true ? "♥" : "♡"}</span>;
};

export default Like;
