import "./App.css";
import Accordion from "./components/Accordion";
import Character from "./components/Character";
import Characters from "./components/Characters";
import Countdown from "./components/Countdown";
import Header from "./components/Header";
import Hora from "./components/Hora";
import Newsletter from "./components/Newsletter";
import Size from "./components/Size";
import Subscribe from "./components/Subscribe";

// Build:
// npm run build
// serve -s build

/* Pongo cada componente en un Accordion para enseñar el
el codigo que se ejecuta cuando el componente se visualiza y se desmonta */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <main>
          <Accordion text="Subscribe">
            <Subscribe />
          </Accordion>
          <Accordion text="Newsletter">
            <Newsletter>Texto desde App</Newsletter>
          </Accordion>
          <Accordion text="Hora">
            <Hora />
          </Accordion>
          <Accordion text="Characters">
            <Characters />
          </Accordion>
          <Accordion text="Character">
            <Character />
          </Accordion>
          <Accordion text="Countdown 10">
            <Countdown seconds={10} />
          </Accordion>
          <Accordion text="Countdown 20">
            <Countdown seconds={20} />
          </Accordion>
          <Accordion text="Size">
            <Size />
          </Accordion>
        </main>
      </header>
    </div>
  );
}

export default App;
