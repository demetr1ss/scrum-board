import styles from './AddTaskButton.module.css';

export default function AddTaskButton() {
  return (
    <button className={styles.button}>
      Добавить новую задачу
    </button>
  );
}
