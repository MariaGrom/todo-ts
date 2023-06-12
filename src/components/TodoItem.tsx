import React from "react";
import styles from "./TodoItem.module.css";
import { Todo } from "../types";

interface TodoItemProps extends Todo {
  children?: React.ReactNode;
  toggleTodo: (id: Todo["id"]) => void;
  removeTodo: (id: Todo["id"]) => void;
}

const TodoItem = ({
  id,
  title,
  completed,
  toggleTodo,
  removeTodo,
  children,
}: TodoItemProps) => {
  return (
    <li className={styles.item}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleTodo(id)}
          className={styles.invisible_checkbox}
        />
        <span className={styles.visible_checkbox}></span>
        <span id="title" className={styles.title}>
          {title}
        </span>
      </label>
      <span className={styles.btn_close} onClick={() => removeTodo(id)}>
        &times;
      </span>
      {children}
    </li>
  );
};

export default TodoItem;
