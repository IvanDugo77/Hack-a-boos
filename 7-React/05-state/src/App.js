import "./App.css";
import Calculadora from "./components/Calculadora";
import Like from "./components/Like";
import Modal from "./components/Modal";
import Picker from "./components/Picker";
import Score from "./components/Score";
import Spoiler from "./components/Spoiler";
import Login from "./components/Login";
import Echo from "./components/Echo";
import Youtube from "./components/Youtube";

function App() {
  console.log("Rendering App...");
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Picker defaultValue={10} />
          {/* <Picker defaultValue={10} /> */}
        </div>
        <Calculadora />
        <div>
          <Like />
        </div>
        <div>
          <Score initial={3} />
        </div>
        <div>
          El asesino de la pelicula es
          <Spoiler>
            <article>...el profesor Stefano!</article>
          </Spoiler>
        </div>
        <div>
          <Modal label="Visualiza modal">Contenido</Modal>
        </div>
        <div>
          <Modal label="Login">
            <Login />
          </Modal>
        </div>
        <div>
          <Echo />
        </div>
        <Youtube />
      </header>
    </div>
  );
}

export default App;
