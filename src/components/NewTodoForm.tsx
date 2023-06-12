import styles from "./NewTodoForm.module.css";

interface NewTodoFormProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  handleClick: (e: any) => void;
}

const NewTodoForm = ({ value, onChange, handleClick }: NewTodoFormProps) => {
  return (
    <div className={styles.form}>
      <input
        type="text"
        placeholder="What needs to be done?"
        value={value}
        onChange={onChange}
        className={styles.input}
      />
      <button className={styles.btn} onClick={handleClick}></button>
    </div>
  );
};

export default NewTodoForm;
