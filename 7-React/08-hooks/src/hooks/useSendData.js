import { useState } from "react";

const useSendData = (url) => {
  const [status, setStatus] = useState("");
  // Estado para guardar el mensaje de error que lleda desde la API
  const [error, setError] = useState("");
  const [response, setResponse] = useState();

  const sendData = async (data, method = "POST") => {
    setStatus("loading");
    const res = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    // parseo la respuesta
    const resData = await res.json();
    //console.log("resData", resData);
    if (resData.status === "error") {
      setStatus("error");
      setError(resData.message);
    } else {
      setStatus("success");
      setError("");
      setResponse(resData.data);
    }
  };

  return [status, error, response, sendData];
};

export default useSendData;
