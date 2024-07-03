import { useState } from "react";
import Spinner from "../components/Spinner";

/* Mirar lo comentarios del componente LOGIN
Los dos componentes son casi iguales. */

const { REACT_APP_API } = process.env;

const Registro = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch(`${REACT_APP_API}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, pwd }),
    });
    const data = await res.json();
    //console.log(data);
    if (data.status === "error") {
      setStatus("error");
    } else {
      setStatus("");
    }
    setMessage(data.message);
  };

  if (status === "loading") {
    return <Spinner />;
  }

  // Defino JSX del componente Registro
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
        <button>Registro</button>
        {message && (
          <p className={`message ${status === "error" && "error"}`}>
            {message}
          </p>
        )}
      </form>
    </main>
  );
};

export default Registro;
