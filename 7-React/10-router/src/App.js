import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AboutIndex from "./pages/AboutIndex";
import Catalog from "./pages/Catalog";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import CharactersIndex from "./pages/CharactersIndex";

// https://reactrouter.com/en/main
// npm i react-router-dom

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/*" element={<AboutIndex />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/characters/*" element={<CharactersIndex />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registro />} />
      </Routes>
    </div>
  );
}

export default App;
