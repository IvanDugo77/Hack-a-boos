import { useState } from "react";
import { useSetUser } from "../contexts/UserContext";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// Voy a leer desde .env REACT_APP_API
const { REACT_APP_API } = process.env;

const Login = () => {
  const navigate = useNavigate();
  // Estado para el input email
  const [email, setEmail] = useState("");
  // Estado para el input pwd
  const [pwd, setPwd] = useState("");
  // Estado para guardar el estado del componente ("", "error" o "loading" )
  const [status, setStatus] = useState("");
  //const [, setUser] = useContext(UserContext);
  const setUser = useSetUser();

  // Funcion manejadora del evento submit del formulario
  const handleSubmit = async (e) => {
    try {
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

      if (!res.ok || data.status === "error") {
        throw new Error(data.message);
      }
      setUser(data.data);
      navigate("/");
      toast.success("¡Te has logueado correctamente!");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setStatus("");
    }
  };

  if (status === "loading") {
    // Si status igual a loading visualizo un div con "Loading..." y non el formulario
    return <Spinner />;
  }

  /* Defino JSX del componente Login
  Cada input es controlado a travéz de un estado: 
    value={email}
    onChange={(e) => setEmail(e.target.value)} */
  return (
    <section className="contenido centered">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
      </form>
    </section>
  );
};

export default Login;
