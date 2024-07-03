import { useState } from "react";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

/* Mirar lo comentarios del componente LOGIN
Los dos componentes son casi iguales. */

const { REACT_APP_API } = process.env;

const Registro = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    try {
      // Cojo el control del submit
      e.preventDefault();
      // Pongo status a loading
      setStatus("loading");
      // Hago la petición de login a la API
      const res = await fetch(`${REACT_APP_API}/users`, {
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

      toast.success(data.message);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setStatus("");
    }
  };

  if (status === "loading") {
    return <Spinner />;
  }

  // Defino JSX del componente Registro
  return (
    <section className="contenido centered">
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
        <button>Registro</button>
      </form>
    </section>
  );
};

export default Registro;
