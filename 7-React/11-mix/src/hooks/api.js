import useFetch from "./useFetch";

export const useCharacters = () =>
  useFetch("https://rickandmortyapi.com/api/character");
export const useCharacter = (id) =>
  useFetch(`https://rickandmortyapi.com/api/character/${id}`);
