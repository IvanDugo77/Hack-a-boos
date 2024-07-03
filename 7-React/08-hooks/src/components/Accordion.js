import { useState } from "react";

const Accordion = ({ text, children }) => {
  const [show, setShow] = useState(false);

  // JSX
  return (
    <div>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {text}
      </button>
      {show === true && children}
    </div>
  );
};

export default Accordion;
