import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import Character from "./Character";
import Characters from "./Characters";
import EditCharacter from "./EditCharacter";

function CharactersIndex() {
  const navigate = useNavigate();

  const handleClick = () => {
    // genero un numero random entre 1 y 826
    const id = Math.floor(Math.random() * 825) + 1;
    console.log(id);
    // voy a /characters/34 (34 es el numero random)
    navigate(`/characters/${id}`);
    // NO, Navigate no se puede utilizar en un handle!!!
    //return <Navigate to={`/characters/${id}`} />;
  };

  return (
    <main className="contenido">
      <aside>
        <NavLink to="/characters/" end>
          Characters
        </NavLink>
        <div style={{ cursor: "pointer" }} onClick={handleClick}>
          Aleatorio
        </div>
      </aside>
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/:id" element={<Character />} />
        <Route path="/edit/:id" element={<EditCharacter />} />
      </Routes>
    </main>
  );
}

export default CharactersIndex;
