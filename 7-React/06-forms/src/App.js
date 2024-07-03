import "./App.css";
import { useState } from "react";

import Modal from "./components/Modal";
import Login from "./components/Login";
import Registro from "./components/Registro";
import Todo from "./components/Todo";

function App() {
  /* Lifting state up
  Creo aqui el estado user para que pueda utilizarlo en el componente App
  y cambiarlo (lo paso como props) en el componente Login */
  const [user, setUser] = useState();

  // JSX
  // Para hacer logout simplemente pongo a undefined user (setUser())
  return (
    <div className="App">
      <header>
        <span>MyApp</span>
        <span className="userSection">
          {/* Si tengo el usuario visualizo email y icono logout */}
          {/* Si no tengo usuario visualizo los botones para hacer login o registrarme */}
          {user ? (
            <>
              👤 {user.email}
              <span onClick={() => setUser()}>❌</span>
            </>
          ) : (
            <>
              <Modal label="Login">
                <Login setUser={setUser} />
              </Modal>
              <Modal label="Registro">
                <Registro />
              </Modal>
            </>
          )}
        </span>
      </header>
      <main>
        {/* En main visualizo el componente Todo */}
        <Todo />
      </main>
    </div>
  );
}

export default App;
