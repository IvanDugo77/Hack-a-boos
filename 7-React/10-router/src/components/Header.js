import { NavLink } from "react-router-dom";
import { useUser, useSetUser } from "../contexts/UserContext";
import "./Header.css";

const Header = () => {
  const user = useUser();
  const setUser = useSetUser();

  return (
    <header>
      <h1>My App</h1>

      <span className="menu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/characters">Personajes</NavLink>
      </span>

      <span className="userSection">
        {/* Si tengo el usuario visualizo email y icono logout */}
        {/* Si no tengo usuario visualizo los botones para hacer login o registrarme */}
        {user ? (
          <>
            👤 {user.email}
            <span onClick={() => setUser()}>✖️</span>
          </>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        )}
      </span>
    </header>
  );
};

export default Header;
