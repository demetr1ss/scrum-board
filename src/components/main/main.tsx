import {DragEvent, useState} from 'react';
import FocusLock from 'react-focus-lock';
import {RemoveScroll} from 'react-remove-scroll';
import {AdaptedTitle, Title} from '../../const/const';
import {useAppSelector} from '../../hooks';
import {getTasks} from '../../store/app-process/selectors';
import {TaskType} from '../../types/types';
import AddTaskButton from '../add-task-button/add-task-button';
import AddNewTaskModalForm from '../add-new-task-modal-form/add-new-task-modal-form';
import Task from '../task/task';
import styles from './main.module.css';
import EditTaskModalForm from '../edit-task-modal-form/edit-task-modal-form';

export default function Main() {
  const [isAddNewTaskModalOpened, setIsAddNewTaskModalOpened] = useState(false);
  const [isEditTaskModalOpened, setIsEditTaskModalOpened] = useState(false);
  const [currentDroppableBoard, setCurrentDroppableBoard] = useState<string>('');
  const [currentTask, setCurrentTask] = useState({} as TaskType);

  const dragOverHandler = (e: DragEvent<HTMLLIElement>) => {
    e.preventDefault();
  };

  const tasks = useAppSelector(getTasks);
  const fields = Object.keys(Title);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Scrum board</h1>
      <AddTaskButton setIsModalOpened={setIsAddNewTaskModalOpened} />
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
                      setCurrentTask={setCurrentTask}
                      setIsEditTaskModalOpened={setIsEditTaskModalOpened}
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
      {isAddNewTaskModalOpened && (
        <FocusLock>
          <RemoveScroll enabled={isAddNewTaskModalOpened}>
            <AddNewTaskModalForm
              isAddNewTaskModalOpened={isAddNewTaskModalOpened}
              setIsAddNewTaskModalOpened={setIsAddNewTaskModalOpened}
            />
          </RemoveScroll>
        </FocusLock>
      )}
      {isEditTaskModalOpened && (
        <FocusLock>
          <RemoveScroll enabled={isAddNewTaskModalOpened}>
            <EditTaskModalForm
              isEditTaskModalOpened={isEditTaskModalOpened}
              setIsEditTaskModalOpened={setIsEditTaskModalOpened}
              currentTask={currentTask}
            />
          </RemoveScroll>
        </FocusLock>
      )}
    </main>
  );
}
