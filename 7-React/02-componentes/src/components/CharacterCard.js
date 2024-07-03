// Componente personaje Rick AND Morty
function CharacterCard({ character }) {
  return (
    <li className="character">
      <h3 title={character.name}>{character.name}</h3>
      <img src={character.image} alt={`Foto de ${character.name}`} />
      <div>{character.species}</div>
      <div className={`status ${character.status}`}>{character.status}</div>
    </li>
  );
}

export default CharacterCard;
