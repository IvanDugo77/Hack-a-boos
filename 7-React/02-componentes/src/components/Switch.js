import "./Switch.css";

// Componente Swith stilo Apple que recibe por props (value) si "encendido" o no
// Añadiremos dinamicidad cuando hablaremos de eventos y state
// Si value===true: className="switch on"
// Si value===false: className="switch off"
function Switch({ value }) {
  return <span className={"switch " + (value ? "on" : "off")} />;
}

export default Switch;
