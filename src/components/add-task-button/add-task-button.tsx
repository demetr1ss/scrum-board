import styles from './add-task-button.module.css';

export default function AddTaskButton() {
  return (
    <button className={styles.button}>
      Добавить новую задачу
    </button>
  );
}
