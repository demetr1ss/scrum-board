import AddTaskButton from '../add-task-button/add-task-button';
import styles from './Main.module.css';
import Task from '../task/task';
import {tasks} from '../../mock';
import {RuTitle} from '../../consts/const';


export default function Main() {
  const fieldNames = Object.keys(tasks);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Scrum board</h1>
      <AddTaskButton />
      <section className="main__board board">
        <ul className={styles.list}>
          {fieldNames.map((fieldName) => (
            <li className={styles.item} key={fieldName}>
              <h2 className={styles.itemTitle}>{RuTitle[fieldName]}</h2>
              <ul className={styles.itemList}>
                {tasks[fieldName].map((task) => (
                  <Task key={task.id} task={task} fieldName={fieldName} />
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
