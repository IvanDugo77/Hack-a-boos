import { NavLink, Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import History from "./History";

function AboutIndex() {
  return (
    <main className="contenido">
      <aside>
        <NavLink to="/about" end>
          About
        </NavLink>
        <NavLink to="/about/history">History</NavLink>
        <NavLink to="/about/contact">Contact</NavLink>
      </aside>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/history" element={<History />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
}

export default AboutIndex;
