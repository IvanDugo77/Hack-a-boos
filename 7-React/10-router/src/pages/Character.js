import { useParams } from "react-router-dom";
import { useCharacter } from "../hooks/api";

const Character = () => {
  // Voy a leer el id del personaje desde path param
  const { id } = useParams();

  const char = useCharacter(id);

  return (
    <>
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
