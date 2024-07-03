import { useState, useEffect } from "react";

// Componente que visualiza un personaje de Rick and Morty
const Character = () => {
  // Estado donde guardo los datos del personaje que me devuelve la API
  const [char, setChar] = useState();
  // Estado donde guardo el id del personaje que quiero visualizar (valor inicial 1 - Rick)
  const [index, setIndex] = useState(1);

  // La callback se ejecuta cuando se visualiza el componente o cuando cambia index ([index])
  useEffect(() => {
    // Defino function async para poder usar await
    const getCharacters = async () => {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/${index}`
      );
      const data = await res.json();
      //console.log(data.results);
      // Guardo los datos del personaje en char con setChar
      setChar(data);
      // IMPORTANTE: no tengo el personaje actual aqui!
      //console.log(char);
    };

    // Llamo la función
    getCharacters();
  }, [index]);

  // JSX del componente.
  // Los dos botones me permiten de incrementar/decrementar index
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
