import { useEffect, useState } from "react";
import styles from "./TodoList.module.css";
import { Todo } from "types";
import TodoItem from "components/TodoItem";

interface TodoListProps {
  list: Todo[];
  setTodos: any;
  toggleTodo?: (id: Todo["id"]) => void;
  removeTodo?: (id: Todo["id"]) => void;
}
const TodoList = ({ list, setTodos }: TodoListProps) => {
  const [filtredTodos, setFiltredTodos] = useState(list);

  useEffect(() => {
    setFiltredTodos(list);
  }, [list]);

  function todoFilter(completed: boolean) {
    if (completed === true) {
      let newTodo = [...list].filter((item) => item.completed === true);
      setFiltredTodos(newTodo);
    } else if (completed === false) {
      let newTodo = [...list].filter((item) => item.completed === false);
      setFiltredTodos(newTodo);
    }
  }

  function todoShowAll() {
    setFiltredTodos(list);
  }

  function clearCompletedTodos() {
    const todoWhithoutDone = list.filter((item) => item.completed !== true);
    setTodos(todoWhithoutDone);
  }

  const toggleTodo = (id: Todo["id"]) => {
    setTodos(
      list.map((todo) => {
        if (todo.id !== id) return todo;

        return {
          ...todo,
          completed: !todo.completed,
        };
      })
    );
  };

  const removeTodo = (id: Todo["id"]) => {
    setTodos(list.filter((todo) => todo.id !== id));
  };

  return (
    <section className={styles.container}>
      <ul>
        {filtredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
            {...todo}
          />
        ))}
      </ul>
      <div className={styles.buttons}>
        <div>
          <button
            className={styles.btn}
            type="button"
            onClick={() => todoShowAll()}
          >
            All
          </button>
          <button
            className={styles.btn}
            type="button"
            onClick={() => todoFilter(false)}
          >
            Active
          </button>
          <button
            className={styles.btn}
            type="button"
            onClick={() => todoFilter(true)}
          >
            Completed
          </button>
        </div>
        <button
          className={styles.btn}
          type="button"
          onClick={() => clearCompletedTodos()}
        >
          Clear completed
        </button>
      </div>
    </section>
  );
};

export default TodoList;
