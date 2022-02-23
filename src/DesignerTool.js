import React from "react";
import { useState } from "react";

export default function DesignerTool() {
  const [input, setInput] = useState("");
  const [fontSize, setFontSize] = useState("8");

  function increClickHandler() {
    setFontSize((prev) => prev + 8);
  }
  function decreClickHandler() {
    setFontSize((prev) => prev - 8);
  }
  return (
    <div>
      <h2>Designer Tool </h2>
      <input
        onChange={(e) => setInput(e.target.value)}
        placeholder="Write Here"
      />
      <button onClick={increClickHandler}>+</button>
      <button onClick={decreClickHandler}>-</button>
      <p style={{ fontSize: `${fontSize}px` }}>{input}</p>
    </div>
  );
}
