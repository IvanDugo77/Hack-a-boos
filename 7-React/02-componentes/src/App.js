import "./App.css";
import Header from "./components/Header";
import Room from "./components/Room";
import Products from "./components/Products";
import Characters from "./components/Characters";
import Spoiler from "./components/Spoiler";
import Switch from "./components/Switch";
import Blink from "./components/Blink";

function App() {
  // Cramos componentes
  return (
    <div className="App">
      <Header />
      <Spoiler show={true}>
        <p>Lorem ipsum...</p>
        <p>Lorem ipsum...</p>
        <p>Lorem ipsum...</p>
        <p>Lorem ipsum...</p>
        <p>Lorem ipsum...</p>
        <p>Lorem ipsum...</p>
      </Spoiler>
      <Switch value={false} />
      <div>
        Palabra que <Blink>parpadea</Blink>
        <div>
          <Blink>
            <span>Hola mundo!</span>
          </Blink>
        </div>
      </div>
      <Room />
      <Characters />
      <Products />
    </div>
  );
}

export default App;
