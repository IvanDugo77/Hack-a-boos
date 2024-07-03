import { useState, useEffect } from "react";

// Custom hook
const useCharacter = (counter) => {
  const [character, setCharacter] = useState();

  useEffect(() => {
    //console.log("Pinto el componente");

    const getCharacter = async () => {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/${counter}`
      );
      const data = await res.json();
      //console.log(data);
      setCharacter(data);
    };
    getCharacter();
    // La función que devuelve el return de la callback del
    // useEffect se ejecuta cuando quito el componente
    return () => {
      console.log("Quito el componente");
    };
  }, [counter]);

  return character;
};

export default useCharacter;
