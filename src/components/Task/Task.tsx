import styles from './Task.module.css';

type TaskType = {
  name: string;
}

export default function Task({name}: TaskType) {
  return (
    <li className={`${styles.item}`}>
      <div className={`${styles[name]} ${styles.wrapper}`}>
        <h3 className={styles.title}>
          Запланированная задача
        </h3>
        <p className={styles.description}>
          Описание задачи
        </p>
      </div>
    </li>
  );
}
