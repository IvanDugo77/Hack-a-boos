import { Route, Routes } from "react-router-dom";
import Registro from "./pages/Registro";
import "./App.css";
import Header from "./components/Header";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import User from "./pages/User";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registro />} />
          <Route path="*" element={<h2>Not found</h2>} />
        </Routes>
      </main>
      <Footer />
      <ToastContainer position="bottom-center" pauseOnHover theme="dark" />
    </>
  );
}

export default App;
