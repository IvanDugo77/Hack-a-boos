// Componente HeaderSection. Recibe por props titulo y subtitulo
// o sea lo que tiene que pintar en h2 y p.
/* 
  const props = {
    titulo: "Room",
    subtitulo: "Habitación de mi hotel",
  }; 
*/
function HeaderSection({ titulo, subtitulo }) {
  // const { titulo, subtitulo } = props;
  return (
    <header>
      <h2>{titulo}</h2>
      <p>{subtitulo}</p>
    </header>
  );
}

export default HeaderSection;
