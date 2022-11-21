import { useState } from 'react';
import styles from './TodoForm.module.css';
import Button from '../UI/Button';

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    header: '',
    description: '',
    time: '',
  });

  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(todo);
    setTodo({
      header: '',
      description: '',
      time: '',
    });
  };

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Текст задачи"
          value={todo.header}
          onChange={(e) => setTodo((prev) => ({ ...prev, header: e.target.value }))}
        />
        <input
          placeholder="Основной текст"
          value={todo.description}
          onChange={(e) => setTodo((prev) => ({ ...prev, description: e.target.value }))}
        />
        <input
          placeholder="Время для выполнения"
          value={todo.time}
          onChange={(e) => setTodo((prev) => ({ ...prev, time: e.target.value }))}
        />
        <Button
          disabled={!todo.header || !todo.description || !todo.time}
          type="submit"
          title="Submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default TodoForm;
