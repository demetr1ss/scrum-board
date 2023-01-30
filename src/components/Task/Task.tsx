import {TaskType} from '../../types/types';
import styles from './Task.module.css';

type TaskPropsType = {
  task: TaskType;
  fieldName: string;
}

export default function Task({task, fieldName}: TaskPropsType) {
  const {title, description} = task;

  return (
    <li className={`${styles.item}`}>
      <div className={`${styles[fieldName]} ${styles.wrapper}`}>
        <h3 className={styles.title}>
          {title}
        </h3>
        <p className={styles.description}>
          {description}
        </p>
      </div>
    </li>
  );
}
