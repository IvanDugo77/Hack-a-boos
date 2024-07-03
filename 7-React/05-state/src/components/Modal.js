import { useState } from "react";
import "./Modal.css";

const Modal = ({ label, children }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="modal">
      <button onClick={() => setShow(!show)}>{label}</button>
      {show && (
        <div onClick={() => setShow(false)} className="modal-bg">
          <div
            onClick={(e) => {
              e.stopPropagation();
              console.log("Evento click en modal fg");
            }}
            className="modal-fg"
          >
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
