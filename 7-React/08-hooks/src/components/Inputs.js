import useLocalStorage from "../hooks/useLocalStorage";

const Inputs = () => {
  const [name, setName] = useLocalStorage("name", "");
  const [surname, setSurname] = useLocalStorage("surname", "");
  // useLocalStorage("personajes", [{ name: "Stefano" }, { name: "Stefano" }]);

  return (
    <>
      <input
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
      ></input>
      <input
        id="surname"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
        type="text"
      ></input>
    </>
  );
};

export default Inputs;
