import { useState } from "react";
import useSendData from "../hooks/useSendData";
import Spinner from "./Spinner";

// Voy a leer desde .env REACT_APP_API
const { REACT_APP_API } = process.env;

const Login = () => {
  // Estado para el input email
  const [email, setEmail] = useState("");
  // Estado para el input pwd
  const [pwd, setPwd] = useState("");
  //Custom hooks
  const [status, error, user, sendData] = useSendData(
    `${REACT_APP_API}/users/login`
  );

  // Funcion manejadora del evento submit del formulario
  const handleSubmit = async (e) => {
    // Cojo el control del submit
    e.preventDefault();
    sendData({ email, pwd });
  };

  // Si status igual a loading visualizo un div con "Loading..." y non el formulario
  if (status === "loading") {
    return <Spinner />;
  }

  return (
    <form className="loginregistro" onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
        />
      </label>
      <label>
        Password:
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
  );
};

export default Login;
