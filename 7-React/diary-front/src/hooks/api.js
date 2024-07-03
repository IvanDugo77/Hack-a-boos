import useFetch from "./useFetch";

export const useEntries = () => useFetch("http://127.0.0.1:4000/entries");
