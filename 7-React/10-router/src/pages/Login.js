import { useState } from "react";
import { useUser, useSetUser } from "../contexts/UserContext";
import Spinner from "../components/Spinner";
import { Navigate } from "react-router-dom";

// Voy a leer desde .env REACT_APP_API
const { REACT_APP_API } = process.env;

const Login = () => {
  // Estado para el input email
  const [email, setEmail] = useState("");
  // Estado para el input pwd
  const [pwd, setPwd] = useState("");
  // Estado para guardar el estado del componente ("", "error" o "loading" )
  const [status, setStatus] = useState("");
  // Estado para guardar el mensaje de error que lleda desde la API
  const [error, setError] = useState("");
  //const [, setUser] = useContext(UserContext);
  const setUser = useSetUser();
  const user = useUser();

  // Funcion manejadora del evento submit del formulario
  const handleSubmit = async (e) => {
    // Cojo el control del submit
    e.preventDefault();
    // Pongo status a loading
    setStatus("loading");
    // Hago la petición de login a la API
    const res = await fetch(`${REACT_APP_API}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, pwd }),
    });
    // parseo la respuesta
    const data = await res.json();
    // console log de lo que devuelve la API
    console.log(data);

    if (data.status === "error") {
      // En caso de error pongo status a "error" y
      // guardo el mensaje que devuelve la API en Error
      // para visualizarlo el el componente login (mirar JSX)
      setStatus("error");
      setError(data.message);
    } else {
      // Si no hay error guardo los datos en el estado user con setUser
      // Esto permitirá a App de cerrar el modal
      setUser(data.data);
    }
    // NO!!!
    //return <Navigate to="/" />;
  };

  if (user) {
    console.log("Aqui tengo el usuario!!!");
    // Permite navegar a la ruta que yo quiero
    // IMPORTANTE: No se puede utilizar en un handler
    return <Navigate to="/characters" />;
  }

  if (status === "loading") {
    // Si status igual a loading visualizo un div con "Loading..." y non el formulario
    return <Spinner />;
  }

  /* Defino JSX del componente Login
  Cada input es controlado a travéz de un estado: 
    value={email}
    onChange={(e) => setEmail(e.target.value)} */
  return (
    <main className="contenido">
      <form className="loginregistro" onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />
        </label>
        <label>
          Password
          <input
            value={pwd}
            onChange={(e) => {
              setPwd(e.target.value);
            }}
            type="password"
            name="pwd"
          />
        </label>
        <button>Login</button>
        {/* En caso de error visualizo un parrafo con el mensaje de error */}
        {status === "error" && <p className="error">{error}</p>}
      </form>
    </main>
  );
};

export default Login;
