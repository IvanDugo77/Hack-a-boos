import './Blink.css'

function Blink({ children }) {
  return (
    <span className="blink">
      {children}
    </span>
  )
}

export default Blink
