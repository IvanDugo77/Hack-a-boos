import useFetch from "./useFetch";

export const useCharacters = () =>
  useFetch("https://rickandmortyapi.com/api/character");
