import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {
    const newItem = {
      id: uuidv4(),
      name: input,
      isDone: false
    };
    setTodos((prevTodos) => [...prevTodos, newItem]);
    console.log(todos);
  }
  function strikethrough(id) {
    const changedTodos = todos.map((item) =>
      item.id === id ? { ...item, isDone: !item.isDone } : item
    );

    setTodos(changedTodos);
    console.log(changedTodos);
  }

  return (
    <div>
      <h2>Todo App</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => addTodo()}>Add Todo</button>
      <ul>
        {" "}
        {todos.map((todo) => (
          <li
            onClick={() => strikethrough(todo.id)}
            style={{ textDecoration: todo.isDone ? "line-through" : "none" }}
          >
            {todo.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
