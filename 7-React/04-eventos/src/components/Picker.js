// Enlace arrows:
// http://xahlee.info/comp/unicode_arrows.html

// componente que visualiza la prop value y pinta en la consola
// "+" si hacemos click en el botón "⇧" y "-" si hacemos click en "⇩"
const Picker = ({ value }) => {
  const handlePlus = () => {
    console.log("+");
  };

  const handleMinus = () => {
    console.log("-");
  };

  return (
    <div>
      <span>{value}</span>
      <button onClick={handlePlus}>⇧</button>
      <button onClick={handleMinus}>⇩</button>
    </div>
  );
};

export default Picker;
