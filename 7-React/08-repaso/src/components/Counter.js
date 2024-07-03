import { useState } from "react";
import useCharacter from "../hooks/useCharacter";

const Counter = ({ init }) => {
  const [counter, setCounter] = useState(init);
  console.log("Renderizo componente");

  const character = useCharacter(counter);

  const handleDown = () => {
    setCounter(counter - 1);
  };

  const handleUp = () => {
    setCounter(counter + 1);
  };
  //JSX
  return (
    <div>
      <span>{counter}</span>
      <button onClick={handleDown}>-</button>
      <button onClick={handleUp}>+</button>
      {character && (
        <div>
          <img src={character.image} alt={`Imagen de ${character.name}`} />
          <p>{character.name}</p>
        </div>
      )}
    </div>
  );
};

export default Counter;
