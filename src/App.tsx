import React, { useState } from "react";
import styles from "./App.module.css";
import TodoList from "./components/TodoList";
import NewTodoForm from "./components/NewTodoForm";
import { Todo } from "./types";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const addTodo = () => {
    const newTodo: Todo = {
      id: new Date().toString(),
      title: text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
    setText("");
  };

  return (
    <div className={styles.content}>
      <h1>todos</h1>
      <NewTodoForm value={text} onChange={handleInput} handleClick={addTodo}/>
      <TodoList list={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
