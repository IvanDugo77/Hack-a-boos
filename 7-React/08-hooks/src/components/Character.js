import { useState } from "react";
import { useCharacter } from "../hooks/api";

const Character = () => {
  // Estado donde guardo el id del personaje que quiero visualizar (valor inicial 1 - Rick)
  const [index, setIndex] = useState(1);

  const char = useCharacter(index);

  return (
    <>
      <button onClick={() => setIndex(index - 1)}>Prev</button>
      <button onClick={() => setIndex(index + 1)}>Next</button>
      {/* Rendering condicional, cuando tengo char lo visulaizo */}
      {char && (
        <section>
          <h2>{char.name}</h2>
          <img src={char.image} alt={char.name} />
        </section>
      )}
    </>
  );
};

export default Character;
