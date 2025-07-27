import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [publicData, setPublicData] = useState("");
  const [secureData, setSecureData] = useState("");

  const accessToken = "<Paste_Your_Valid_JWT_Here>";

  useEffect(() => {
    axios.get("http://localhost:8080/api/public").then(res => {
      setPublicData(res.data);
    });

    axios.get("http://localhost:8080/api/secure", {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }).then(res => {
      setSecureData(res.data);
    }).catch(err => {
      setSecureData("Unauthorized or invalid token");
    });
  }, []);

  return (
    <div>
      <h2>Public API Response:</h2>
      <p>{publicData}</p>
      <h2>Secure API Response:</h2>
      <p>{secureData}</p>
    </div>
  );
}

export default App;
