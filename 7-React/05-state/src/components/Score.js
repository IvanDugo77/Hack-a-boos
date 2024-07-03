import { useState } from "react";

// Componente que implementa la clasica votación por 5 estrellas
const Score = ({ initial = 0 }) => {
  const [value, setValue] = useState(initial);

  return (
    <div>
      <span onClick={() => setValue(1)}>{value >= 1 ? "★" : "☆"}</span>
      <span onClick={() => setValue(2)}>{value >= 2 ? "★" : "☆"}</span>
      <span onClick={() => setValue(3)}>{value >= 3 ? "★" : "☆"}</span>
      <span onClick={() => setValue(4)}>{value >= 4 ? "★" : "☆"}</span>
      <span onClick={() => setValue(5)}>{value >= 5 ? "★" : "☆"}</span>
    </div>
  );
};

export default Score;
