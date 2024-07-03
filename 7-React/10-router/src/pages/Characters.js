import { Link, Navigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import { useCharacters } from "../hooks/api";

const Characters = () => {
  const chars = useCharacters();
  const user = useUser();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <ul className="characters">
      {chars &&
        chars.results.map((char) => {
          return (
            <li className="character" key={char.id}>
              <Link to={`/characters/${char.id}`}>
                <h2>{char.name}</h2>
                <img src={char.image} alt={char.name} />
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default Characters;
