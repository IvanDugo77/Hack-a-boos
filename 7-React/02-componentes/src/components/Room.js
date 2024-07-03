import HeaderSection from "./HeaderSection";
import room from "../data/room.json";
import Reserva from "./Reserva";
import CounterButton from "./CounterButton";
import Like from "./Like";
import Score from "./Score";

// Componente Room que pinta la suite
// El componente utiliza a su vez varios componentes (HeaderSection, CounteButton, Score, Like ...)
function Room() {
  return (
    <section
      className={"room " + (room.available ? "available" : "notavailable")}
    >
      <HeaderSection titulo="Room" subtitulo="Habitación de mi hotel" />
      <h3 className="title">{room.title}</h3>
      <p className="description">{room.description}</p>
      <p className="status">
        {room.available ? "Disponible" : "No disponible"}
      </p>
      <Reserva price={room.price} />
      <CounterButton icon="🛌🏻" text="camas" num={2} />
      <CounterButton icon="🛀🏻" text="baños" num={1} />
      <CounterButton icon="🏋🏻‍♂️" text="gym" />
      <Like active={false} />
      <Score vote={0} />
      <ul>
        Servicios:
        {room.services.map((service) => {
          return <li key={service}>{service}</li>;
        })}
      </ul>
    </section>
  );
}

export default Room;
