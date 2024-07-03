import { useState, useEffect } from "react";

// Componente que visualiza los personajes de Rick and Morty
const Characters = () => {
  // Estado donde guardo los datos del los personajes que me devuelve la API
  // Inicializo con array vacio
  const [chars, setChars] = useState([]);

  // La callback se ejecuta cuando se visualiza el componente
  useEffect(() => {
    // Defino function async para poder usar await
    const getCharacters = async () => {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const data = await res.json();
      console.log(data.results);
      // Guardo los datos del personaje en chars con setChars
      setChars(data.results);
    };

    // llamo la función
    getCharacters();
  }, []);

  // JSX del componente.
  // Si chars.length === 0 (array vacío) devuelvo "Ningún personaje"
  // si no el listado de los personajes (con map)
  return (
    <ul>
      {chars.length === 0
        ? "Ningún personaje"
        : chars.map((char) => {
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
