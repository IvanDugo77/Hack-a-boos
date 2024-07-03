import "./App.css";
import Accordion from "./components/Accordion";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Accordion text="Hola">
          <div>Hola</div>
        </Accordion>
        <Accordion text="Listado">
          <ul>
            <li>a</li>
            <li>b</li>
            <li>c</li>
          </ul>
        </Accordion>
        <Accordion text="Character">
          <Counter init={1} />
        </Accordion>
      </header>
    </div>
  );
}

export default App;
