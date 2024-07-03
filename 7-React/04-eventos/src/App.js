import "./App.css";

import { Saluda } from "./components/Saluda";
import Picker from "./components/Picker";
import Echo from "./components/Echo";
import Interruptor from "./components/Interruptor";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Saluda nombre="Stefano" />
        <Saluda nombre="Ana" />
        <Saluda />
        <Picker value={2} />
        <Echo />
        <Interruptor />
        <Login />
      </header>
    </div>
  );
}

export default App;
