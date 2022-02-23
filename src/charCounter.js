import React from "react";
import {useState} from "react";

export default function CharCounter(){
  const [counter, setCounter] = useState(0);
  function countChar(e){
    const charLength = e.target.value.length;
    return setCounter(30 - charLength)
  }
  return(
    <div>
      <h2>Character Counter </h2>
      <textarea onChange={countChar} placeholder="Write a post here"/>
      <h3>Charcters left: {counter}</h3>
    </div>
  );
}