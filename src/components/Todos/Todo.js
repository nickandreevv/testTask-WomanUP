import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri';
import { AiOutlineStop } from 'react-icons/ai';
import { FaCheck } from 'react-icons/fa';
import styles from './Todo.module.css';
import { useTimer } from '../../hooks/useTimer';

function Todo({ todo, deleteTodo, toggleTodo }) {
  const { time, isFinished, timer } = useTimer(todo.time);

  return (
    <div className={`${styles.todo} ${todo.isCompleted ? styles.completedTodo : ''}`}>
      <RiTodoFill className={styles.todoIcon} />

      <div className={styles.textStyle}>{todo.header}:</div>

      <div className={styles.todoText}>{todo.description}</div>
      <div>{todo.isCompleted ? '' : <input className={styles.inputStyle} type="file"></input>}</div>
      <div>{todo.isCompleted ? todo.time : time}</div>

      <RiDeleteBin2Line className={styles.deleteIcon} onClick={() => deleteTodo(todo.id)} />
      {!isFinished ? (
        <FaCheck
          className={styles.checkIcon}
          onClick={() => {
            toggleTodo(todo.id);
            clearInterval(timer);
          }}
        />
      ) : (
        <AiOutlineStop />
      )}
    </div>
  );
}

export default Todo;
