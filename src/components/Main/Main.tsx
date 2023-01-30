import AddTaskButton from '../AddTaskButton/AddTaskButton';
import styles from './Main.module.css';
import {tasks} from '../../mock';
import Task from '../Task/Task';
import {RuTitle} from '../../consts/const';


export default function Main() {
  const fieldName = Object.keys(tasks);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Scrum board</h1>
      <AddTaskButton />
      <section className="main__board board">
        <ul className={styles.list}>
          {fieldName.map((field) => (
            <li className={styles.item} key={field}>
              <h2 className={styles.itemTitle}>{RuTitle[field]}</h2>
              <ul className={styles.itemList}>
                {tasks[field].map((task) => (
                  <Task key={task.id} name={field} />
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
