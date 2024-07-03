import "./App.css";
// import Countdown from "./components/Countdown";
// import Hora from "./components/Hora";
// import Size from "./components/Size";
// import Accordion from "./components/Accordion";
// import Character from "./components/Character";
// import Characters from "./components/Characters";
import Inputs from "./components/Inputs";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Inputs />
        </p>
        <Login />
        {/* <p>
          <Hora />
        </p>
        <p>
          <Size />
        </p>
        <p>
          <Countdown seconds={10} otro="hola" />
        </p>
        <p>
          <Countdown seconds={100} />
        </p>
        <Accordion text="Character">
          <Character />
        </Accordion>
        <Accordion text="Characters">
          <Characters />
        </Accordion> */}
      </header>
    </div>
  );
}

export default App;
