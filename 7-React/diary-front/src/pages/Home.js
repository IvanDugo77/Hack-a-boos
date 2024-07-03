import { useEntries } from "../hooks/api";

const Home = () => {
  const etries = useEntries();

  return (
    <section>
      <ul className="entries">
        {etries &&
          etries.data.map((entry) => {
            return (
              <li className="entry" key={entry.id}>
                <h3>{entry.place}</h3>
                <p>{entry.description}</p>
                <img
                  src={`http://127.0.0.1:4000/${entry.photo[0].photo}`}
                  alt={`Foto de ${entry.place}`}
                />
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default Home;
