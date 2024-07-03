import "./App.css";
import room from "./data/room.json";
import products from "./data/products.json";
import characters from "./data/characters.json";

// https://reactjs.org/docs/lists-and-keys.html#keys

// Componente APP, donde empieza todo
function App() {
  // JSX
  // Dentro de las llaves solo puedo poner una expression:
  // let a = expression
  // let newArray = room.services.map(...)
  return (
    <div className="App">
      <h1>Primeros pasos</h1>
      <section
        className={"room " + (room.available ? "available" : "notavailable")}
      >
        <header>
          <h2>Room</h2>
        </header>
        <h3 className="title">{room.title}</h3>
        <p className="description">{room.description}</p>
        <p className="status">
          {room.available ? "Disponible" : "No disponible"}
        </p>
        Desde sólo {room.price}€ por noche
        <ul>
          Servicios:
          {room.services.map((service) => {
            return <li>{service}</li>;
          })}
        </ul>
      </section>
      <section className="products">
        <header>
          <h2>Products</h2>
        </header>
        <ul className="productos">
          {products.map((product) => {
            return (
              <li className="product">
                <h3 title={product.title}>{product.title}</h3>
                <img src={product.image} alt={product.title} />
                <div>{product.category}</div>
                <div>{product.price}€</div>
                {/* <span className="destacado">
                  {product.rating.count >= 400 ? "Destacado" : ""}
                  {product.rating.count >= 400 ? "Destacado" : null}
                  {product.rating.count >= 400 && "Destacado"}
                </span> */}
                {product.rating.count >= 400 && (
                  <span className="destacado"></span>
                )}
              </li>
            );
          })}
        </ul>
      </section>
      <section className="characters">
        <header>
          <h2>Characters</h2>
        </header>
        <ul className="characters">
          {characters.map((character) => {
            return (
              <li className="character">
                <h3 title={character.name}>{character.name}</h3>
                <img src={character.image} alt={`Foto de ${character.name}`} />
                <div>{character.species}</div>
                <div className={`status ${character.status}`}>
                  {character.status}
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default App;
