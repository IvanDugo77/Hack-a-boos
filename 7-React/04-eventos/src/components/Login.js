// Componente login
const Login = () => {
  // función manejadora submit
  const handleSubmit = (e) => {
    // stop del comportamiento de default del submit de un form HTML
    e.preventDefault();
    console.log(e.target);
    // contenido de los inputs
    const username = e.target.elements.username.value;
    const pwd = e.target.elements.password.value;
    console.log("Función manejadora");
    // imprimo a consola los datos del formulario
    console.log("Enviando...", username, pwd);
  };

  // defino JSX del componente Login
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Usuario:
        <input name="username" />
      </label>
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <button>Entra!</button>
    </form>
  );
};

export default Login;
