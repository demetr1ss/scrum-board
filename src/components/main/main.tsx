/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useState } from 'react';
import { DragDropContext, Droppable, DropResult, DroppableProvided } from 'react-beautiful-dnd';
import FocusLock from 'react-focus-lock';
import { RemoveScroll } from 'react-remove-scroll';
import { AdaptedTitle, Title } from '../../const/const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getQuestions, getTasks } from '../../store/app-process/selectors';
import { TaskType } from '../../types/types';
import AddTaskButton from '../add-task-button/add-task-button';
import AddNewTaskModalForm from '../add-new-task-modal-form/add-new-task-modal-form';
import Task from '../task/task';
import styles from './main.module.css';
import EditTaskModalForm from '../edit-task-modal-form/edit-task-modal-form';
import ConfirmModal from '../confirm-modal/confirm-modal';
import ChangeStatusModal from '../change-status-modal/change-status-modal';
import GetRandomQuestionButton from '../get-random-question-button/get-random-question-button';
import RandomQuestionModal from '../random-question-modal/random-question-modal';
import { editTask } from '../../store/api-actions';

export default function Main() {
  const dispatch = useAppDispatch();
  const [isAddNewTaskModalOpened, setIsAddNewTaskModalOpened] = useState(false);
  const [isGetRandomQuestionModalOpened, setIsGetRandomQuestionModalOpened] = useState(false);
  const [isEditTaskModalOpened, setIsEditTaskModalOpened] = useState(false);
  const [isConfirmModalOpened, setIsConfirmModalOpened] = useState(false);
  const [isChangeStatusModalOpened, setIsChangeStatusModalOpened] = useState(false);
  const [currentTask, setCurrentTask] = useState({} as TaskType);

  const tasks = useAppSelector(getTasks);
  const fields = Object.keys(Title);
  const questions = useAppSelector(getQuestions);

  const handleDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    // Если нет места для перемещения или перемещение в то же место - ничего не делаем
    if (!destination ||
        (destination.droppableId === source.droppableId &&
         destination.index === source.index)) {
      return;
    }

    // Найдем перетаскиваемую задачу
    const task = tasks.find((t) => t.id === draggableId);
    if (!task) {
      return;
    }

    // Убедимся, что droppableId - это ключ, который соответствует полям задачи
    const sourceId = source.droppableId as keyof Omit<TaskType, 'id' | 'title' | 'description'>;
    const destinationId = destination.droppableId as keyof Omit<TaskType, 'id' | 'title' | 'description'>;

    // Обновляем задачу, устанавливая новый статус
    dispatch(
      editTask({
        ...task,
        [sourceId]: false,
        [destinationId]: true,
      })
    );
  };

  return (
    <main className={styles.main}>
      <AddTaskButton setIsModalOpened={setIsAddNewTaskModalOpened} />
      <DragDropContext onDragEnd={handleDragEnd}>
        <section className={styles.board}>
          <ul className={styles.list}>
            {fields.map((fieldName) => (
              <li
                className={`${styles.item} ${styles[fieldName as keyof typeof styles]}`}
                key={fieldName}
                id={fieldName}
              >
                <h2 className={styles.itemTitle}>{AdaptedTitle[fieldName]}</h2>
                <Droppable droppableId={fieldName}>
                  {(provided: DroppableProvided) => (
                    <ul
                      className={styles.itemList}
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                    >
                      {tasks?.map((task, index) =>
                        task[fieldName as keyof TaskType] === true ? (
                          <Task
                            key={task.id}
                            task={task}
                            index={index}
                            fieldName={fieldName}
                            setCurrentTask={setCurrentTask}
                            setIsEditTaskModalOpened={setIsEditTaskModalOpened}
                            setIsConfirmModalOpened={setIsConfirmModalOpened}
                            setIsChangeStatusModalOpened={setIsChangeStatusModalOpened}
                          />
                        ) : null
                      )}
                      {provided.placeholder}
                    </ul>
                  )}
                </Droppable>
              </li>
            ))}
          </ul>
        </section>
      </DragDropContext>
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
