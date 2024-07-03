import { useState, useEffect } from "react";

const useLocalStorage = (varName, outInitVal) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(varName)) || outInitVal
  );

  useEffect(() => {
    localStorage.setItem(varName, JSON.stringify(value));
  }, [value, varName]);

  return [value, setValue];
};

export default useLocalStorage;
