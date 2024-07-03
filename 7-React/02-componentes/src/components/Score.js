// Componente que implementa la clasica votación por 5 estrellas
// Añadiremos dinamicidad cuando hablaremos de eventos y state
const Score = ({ vote }) => {
  return (
    <div>
      {vote >= 1 ? "★" : "☆"}
      {vote >= 2 ? "★" : "☆"}
      {vote >= 3 ? "★" : "☆"}
      {vote >= 4 ? "★" : "☆"}
      {vote >= 5 ? "★" : "☆"}
    </div>
  );
};

export default Score;
