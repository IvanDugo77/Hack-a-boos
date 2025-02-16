import { Rating, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";

function Home() {
  const [value, setValue] = useState(5);
  return (
    <main className="contenido">
      <div>
        <Button variant="contained">Hello World</Button>
      </div>
      <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <Typography component="legend">Read only</Typography>
      <Rating name="read-only" value={value} readOnly />
      <Typography component="legend">Disabled</Typography>
      <Rating name="disabled" value={value} disabled />
      <Typography component="legend">No rating given</Typography>
      <Rating name="no-value" value={null} />
    </main>
  );
}

export default Home;
