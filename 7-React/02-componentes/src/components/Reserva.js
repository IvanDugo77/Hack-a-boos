import "./Reserva.css";

// Componente Reserva, recibe el precio por props
function Reserva({ price }) {
  return <span className="reserva">Reserva por solo {price}€ por noche</span>;
}

export default Reserva;
