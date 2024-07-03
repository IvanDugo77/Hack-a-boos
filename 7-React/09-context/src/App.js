import "./App.css";

import Todo from "./components/Todo";
import Header from "./components/Header";
import Characters from "./components/Characters";
import { useTheme } from "./contexts/ThemeContext";
import Products from "./components/Products";

function App() {
  const theme = useTheme();
  return (
    <div className="App">
      <Header />
      <main className={`main ${theme}`}>
        {/* En main visualizo el componente Todo */}
        <Todo />
        <Products />
        <Characters />
      </main>
    </div>
  );
}

export default App;
