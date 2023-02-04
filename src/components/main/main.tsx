import FocusLock from 'react-focus-lock';
import AddTaskButton from '../add-task-button/add-task-button';
import styles from './main.module.css';
import Task from '../task/task';
import {AdaptedTitle} from '../../consts/const';
import {useAppSelector} from '../../hooks';
import {getTasks} from '../../store/app-process/selectors';
import {useState} from 'react';
import {RemoveScroll} from 'react-remove-scroll';
import ModalForm from '../modal-form/modal-form';

export default function Main() {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const tasks = useAppSelector(getTasks);
  const fields = Object.keys(tasks);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Scrum board</h1>
      <AddTaskButton setIsModalOpened={setIsModalOpened} />
      <section className="main__board board">
        <ul className={styles.list}>
          {fields.map((fieldName) => (
            <li className={styles.item} key={fieldName}>
              <h2 className={styles.itemTitle}>{AdaptedTitle[fieldName]}</h2>
              <ul className={styles.itemList}>
                {tasks[fieldName].map((task) => (
                  <Task key={task.id} task={task} fieldName={fieldName} />
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
      {isModalOpened &&
        <FocusLock>
          <RemoveScroll enabled={isModalOpened}>
            <ModalForm
              isModalOpened={isModalOpened}
              setIsModalOpened={setIsModalOpened}
            />
          </RemoveScroll>
        </FocusLock>}
    </main>
  );
}
