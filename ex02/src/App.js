import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("no data provided!");

  const handleInput = (event) => {
    setInput(event.target.value || "no data provided!");
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleInput} />
      <h1>{input}</h1>
    </div>
  );
}

export default App;
