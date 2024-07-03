import { useState } from "react";

const Youtube = () => {
  console.log("Rendering....");
  const [up, setUp] = useState(0);
  const [down, setDown] = useState(0);

  return (
    <div>
      <button onClick={() => setUp(up + 1)}>{up}👍</button>
      <button onClick={() => setDown(down + 1)}>{down}👎</button>
    </div>
  );
};

export default Youtube;
