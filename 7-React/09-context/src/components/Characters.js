import { useCharacters } from "../hooks/api";

const Characters = () => {
  const chars = useCharacters();

  return (
    <ul>
      {chars &&
        chars.results.map((char) => {
          return (
            <li key={char.id}>
              <h2>{char.name}</h2>
              <img src={char.image} alt={char.name} />
            </li>
          );
        })}
    </ul>
  );
};

export default Characters;
