import React, { useState } from "react";
import "./App.css";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputText.trim() !== "") {
      setTodos([...todos, { text: inputText, done: false }]);
      setInputText("");
    }
  };

  const handleRemoveTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const handleToggleDone = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].done = !updatedTodos[index].done;
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <div>
        <input
          type="text"
          placeholder="Add a new todo"
          value={inputText}
          onChange={handleInputChange}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleAddTodo();
            }
          }}
        />

        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <span
              style={{ textDecoration: todo.done ? "line-through" : "none" }}
              onClick={() => handleToggleDone(index)}
            >
              {todo.text}
            </span>
            {hoveredIndex === index && (
              <span
                className="delete-icon"
                onClick={() => handleRemoveTodo(index)}
              >
                &#128465;
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
