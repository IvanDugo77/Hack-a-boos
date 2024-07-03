import "./CounterButton.css";

// Componente que pinta icono, texto y numero que le paso por props
const CounterButton = ({ icon, text, num = 0 }) => (
  <span className="counterButton">
    <span>{icon}</span>
    <span>{text}</span>
    <span className="num">{num}</span>
  </span>
);

export default CounterButton;
