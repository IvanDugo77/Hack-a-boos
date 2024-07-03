import logo from "./logo.svg";
import "./App.css";

// Ejemplo de utilizo de una imagen en src
// y uso de estilo en linea. A style en JSX tengo que pasarle siempre una objeto JS
// donde cada propriedad es el lowerCammelCase de la corrispondiente propriedad en CSS
// (ej: background-image ==> backgroundImage)
function App() {
  return (
    <div className="App">
      <img src={logo} alt="Logotipo React" />
      <div
        className="divBackImg"
        style={{ backgroundImage: `url(${logo})` }}
      ></div>
    </div>
  );
}

export default App;
