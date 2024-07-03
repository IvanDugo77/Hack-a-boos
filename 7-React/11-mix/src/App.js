import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AboutIndex from "./pages/AboutIndex";
import Catalog from "./pages/Catalog";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import CharactersIndex from "./pages/CharactersIndex";
import Video from "./pages/Video";
import ErrorBoundary from "./ErrorBoundary";
// Import react-toastify + CSS
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// https://reactrouter.com/en/main
// npm i react-router-dom

function App() {
  // con este hook voy a leer la url en el browser
  const location = useLocation();
  console.log(location.pathname);
  // const foo = undefined;
  // let a = foo.a;
  return (
    <div className="App">
      <Header />
      <ErrorBoundary
        key={location.pathname}
        fallback={<h2>Error en la section</h2>}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<AboutIndex />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/video" element={<Video />} />
          <Route path="/characters/*" element={<CharactersIndex />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registro />} />
        </Routes>
      </ErrorBoundary>
      <ToastContainer position="bottom-center" pauseOnHover theme="dark" />
    </div>
  );
}

export default App;
