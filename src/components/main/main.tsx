import {DragEvent, useState} from 'react';
import FocusLock from 'react-focus-lock';
import {RemoveScroll} from 'react-remove-scroll';
import {AdaptedTitle} from '../../const/const';
import {useAppSelector} from '../../hooks';
import {getTasks} from '../../store/app-process/selectors';
import AddTaskButton from '../add-task-button/add-task-button';
import ModalForm from '../modal-form/modal-form';
import Task from '../task/task';
import styles from './main.module.css';

export default function Main() {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [currentDroppableBoard, setCurrentDroppableBoard] = useState<string>('');

  const dragOverHandler = (e: DragEvent<HTMLLIElement>) => {
    e.preventDefault();
  };

  const tasks = useAppSelector(getTasks);
  const fields = Object.keys(AdaptedTitle);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Scrum board</h1>
      <AddTaskButton setIsModalOpened={setIsModalOpened} />
      <section className='main__board board'>
        <ul className={styles.list}>
          {fields.map((fieldName) => (
            <li
              className={`${styles.item} ${styles[fieldName]}`}
              key={fieldName}
              id={fieldName}
              onDragOver={(e) => dragOverHandler(e)}
              onDrop={() => setCurrentDroppableBoard(fieldName)}
            >
              <h2 className={styles.itemTitle}>{AdaptedTitle[fieldName]}</h2>
              <ul className={styles.itemList}>
                {tasks?.map((task) =>
                  task[fieldName as keyof typeof task] === true ? (
                    <Task
                      key={task.id}
                      task={task}
                      fieldName={fieldName}
                      currentDroppableBoard={currentDroppableBoard}
                      setIsModalOpened={setIsModalOpened}
                    />
                  ) : (
                    ''
                  )
                )}
              </ul>
            </li>
          ))}
        </ul>
      </section>
      {isModalOpened && (
        <FocusLock>
          <RemoveScroll enabled={isModalOpened}>
            <ModalForm isModalOpened={isModalOpened} setIsModalOpened={setIsModalOpened} />
          </RemoveScroll>
        </FocusLock>
      )}
    </main>
  );
}
