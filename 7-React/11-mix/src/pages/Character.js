import { useNavigate, useParams } from "react-router-dom";
import { useCharacter } from "../hooks/api";

const Character = () => {
  // Voy a leer el id del personaje desde path param
  const { id } = useParams();
  const char = useCharacter(id);
  const navigate = useNavigate();

  return (
    <>
      {/* Rendering condicional, cuando tengo char lo visulaizo */}
      {char && (
        <section>
          <h2>{char.name}</h2>
          <img src={char.image} alt={char.name} />
          <p>{char.status}</p>
          <span
            onClick={() => {
              navigate(`/characters/edit/${char.id}`);
            }}
          >
            🖋
          </span>
        </section>
      )}
    </>
  );
};

export default Character;
