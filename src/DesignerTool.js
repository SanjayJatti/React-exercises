import React from "react";
import {useState} from "react";

export default function DesignerTool(){
  const [input, setinput] = useState("")
  const [fontSize, setFontSize] = useState("8");

  function increClickHandler(){
      return  setFontSize((prev) => prev + 8)
  }
  function decreClickHandler(){
    return  setFontSize((prev) => prev - 8)

  }
  return(
    <div>
    <h2>Designer Tool </h2>
    <input onChange={(e) => setinput(e.target.value)} placeholder="Write Here"/>
    <button onClick={increClickHandler}>+</button>
    <button onClick={decreClickHandler}>-</button>
    <p style={{fontSize: `${fontSize}px`}}>{input}</p>
    </div>
  )
}
