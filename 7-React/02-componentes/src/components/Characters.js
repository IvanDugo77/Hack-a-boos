import HeaderSection from "./HeaderSection";
import characters from "../data/characters.json";
import CharacterCard from "./CharacterCard";

// Componente listado personajes Rich AND Morty
// El map devuelve una lista de componentes CharacterCard
// El componente utiliza a su vez componentes (HeaderSection, CharacterCard)
function Characters() {
  console.log("START");
  return (
    <section className="characters">
      <HeaderSection
        titulo="Characters"
        subtitulo="Personajes de Rick And Morty"
      />
      <ul className="characters">
        {characters.map((character) => {
          return <CharacterCard key={character.id} character={character} />;
        })}
      </ul>
    </section>
  );
  // console.log("END");
}

export default Characters;
