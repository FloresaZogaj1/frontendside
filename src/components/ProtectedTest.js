import React, { useState } from "react";

const API_URL = process.env.REACT_APP_API_URL;

function ProtectedTest() {
  const [data, setData] = useState("");
  const [error, setError] = useState("");

  const handleTest = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`${API_URL}/api/protected`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const result = await res.json();
      if (res.ok) setData(JSON.stringify(result));
      else setError(result.message || "Gabim");
    } catch {
      setError("Nuk ka lidhje me API-në");
    }
  };

  return (
    <div>
      <button onClick={handleTest}>Testo Protected API</button>
      {data && <pre>{data}</pre>}
      {error && <div style={{color: "red"}}>{error}</div>}
    </div>
  );
}
const handleTest = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    setError("Nuk je i kyçur! (token mungon)");
    return;
  }
  try {
    const res = await fetch(`${API_URL}/api/protected`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const result = await res.json();
    if (res.ok) setData(JSON.stringify(result, null, 2));
    else setError(result.msg || "Gabim");
  } catch {
    setError("Nuk ka lidhje me API-në");
  }
};


export default ProtectedTest;
