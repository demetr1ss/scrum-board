import {DragEvent, useState} from 'react';
import FocusLock from 'react-focus-lock';
import {RemoveScroll} from 'react-remove-scroll';
import {AdaptedTitle, Title} from '../../const/const';
import {useAppSelector} from '../../hooks';
import {getQuestions, getTasks} from '../../store/app-process/selectors';
import {TaskType} from '../../types/types';
import AddTaskButton from '../add-task-button/add-task-button';
import AddNewTaskModalForm from '../add-new-task-modal-form/add-new-task-modal-form';
import Task from '../task/task';
import styles from './main.module.css';
import EditTaskModalForm from '../edit-task-modal-form/edit-task-modal-form';
import ConfirmModal from '../confirm-modal/confirm-modal';
import ChangeStatusModal from '../change-status-modal/change-status-modal';
import GetRandomQuestionButton from '../get-random-question-button/get-random-question-button';
import RandomQuestionModal from '../random-question-modal/random-question-modal';

export default function Main() {
  const [isAddNewTaskModalOpened, setIsAddNewTaskModalOpened] = useState(false);
  const [isGetRandomQuestionModalOpened, setIsGetRandomQuestionModalOpened] = useState(false);
  const [isEditTaskModalOpened, setIsEditTaskModalOpened] = useState(false);
  const [isConfirmModalOpened, setIsConfirmModalOpened] = useState(false);
  const [isChangeStatusModalOpened, setIsChangeStatusModalOpened] = useState(false);
  const [currentDroppableBoard, setCurrentDroppableBoard] = useState<string>('');
  const [currentTask, setCurrentTask] = useState({} as TaskType);

  const dragOverHandler = (e: DragEvent<HTMLLIElement>) => {
    e.preventDefault();
  };

  const tasks = useAppSelector(getTasks);
  const fields = Object.keys(Title);
  const questions = useAppSelector(getQuestions);

  return (
    <main className={styles.main}>
      <AddTaskButton setIsModalOpened={setIsAddNewTaskModalOpened} />
      <section className={styles.board}>
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
                      setIsConfirmModalOpened={setIsConfirmModalOpened}
                      setIsChangeStatusModalOpened={setIsChangeStatusModalOpened}
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
      <GetRandomQuestionButton onClick={() => setIsGetRandomQuestionModalOpened(true)}/>
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
      {isGetRandomQuestionModalOpened && (
        <FocusLock>
          <RemoveScroll enabled={isGetRandomQuestionModalOpened}>
            <RandomQuestionModal
              isGetRandomQuestionModalOpened={isGetRandomQuestionModalOpened}
              setIsGetRandomQuestionModalOpened={setIsGetRandomQuestionModalOpened}
              questions={questions}
            />
          </RemoveScroll>
        </FocusLock>
      )}
      {isEditTaskModalOpened && (
        <FocusLock>
          <RemoveScroll enabled={isEditTaskModalOpened}>
            <EditTaskModalForm
              isEditTaskModalOpened={isEditTaskModalOpened}
              setIsEditTaskModalOpened={setIsEditTaskModalOpened}
              currentTask={currentTask}
            />
          </RemoveScroll>
        </FocusLock>
      )}
      {isConfirmModalOpened && (
        <FocusLock>
          <RemoveScroll enabled={isConfirmModalOpened}>
            <ConfirmModal
              isConfirmModalOpened={isConfirmModalOpened}
              setIsConfirmModalOpened={setIsConfirmModalOpened}
              currentTask={currentTask}
            />
          </RemoveScroll>
        </FocusLock>
      )}
      {isChangeStatusModalOpened && (
        <FocusLock>
          <RemoveScroll enabled={isChangeStatusModalOpened}>
            <ChangeStatusModal
              isChangeStatusModalOpened={isChangeStatusModalOpened}
              setIsChangeStatusModalOpened={setIsChangeStatusModalOpened}
              currentTask={currentTask}
            />
          </RemoveScroll>
        </FocusLock>
      )}
    </main>
  );
}
