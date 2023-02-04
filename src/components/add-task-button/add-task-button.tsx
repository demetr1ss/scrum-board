import styles from './add-task-button.module.css';

type AddTaskButtonPropsType = {
  setIsModalOpened: (status: boolean) => void;
}

export default function AddTaskButton({setIsModalOpened}: AddTaskButtonPropsType) {
  return (
    <button className={styles.button} onClick={() => setIsModalOpened(true)}>
      Add new task
    </button>
  );
}
