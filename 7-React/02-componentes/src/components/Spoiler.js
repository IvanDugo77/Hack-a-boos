// Componente que muestra los children si show es true.
// Show y children son 2 props. children es una prop especial (contenido del componente Spoiler,
// lo que está entre la abertura y cierre de Spoiler)
// Añadiremos dinamicidad cuando hablaremos de eventos y state
const Spoiler = ({ show, children }) => {
  return show && children;
};

export default Spoiler;
