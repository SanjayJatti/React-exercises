import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  function clickHandler() {
    setTodos((prevTodos) => [
      {
        ...prevTodos,
        id: uuidv4(),
        todos: input,
        isDone: false
      }
    ]);
  }
  function strikethrough(id) {
    todos.isDone ? false : true;
  }
  return (
    <div>
      <h2>Todo App</h2>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={clickHandler}>Add Todo</button>
      <ul>
        {" "}
        {todos.map((todo) => (
          <li
            onClick={() => strikethrough()}
            style={{ textDecoration: isDone ? "line-through" : "none" }}
          >
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}
