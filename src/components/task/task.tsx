import {useState} from 'react';
import {useAppDispatch} from '../../hooks';
import {editTask} from '../../store/api-actions';
import {TaskType} from '../../types/types';
import styles from './task.module.css';

type TaskPropsType = {
  task: TaskType;
  fieldName: string;
  currentDroppableBoard: string;
  setCurrentTask: (task: TaskType) => void;
  setIsEditTaskModalOpened: (status: boolean) => void;
  setIsConfirmModalOpened: (status: boolean) => void;
};

export default function Task({
  task,
  fieldName,
  currentDroppableBoard,
  setCurrentTask,
  setIsEditTaskModalOpened,
  setIsConfirmModalOpened,
}: TaskPropsType) {
  const dispatch = useAppDispatch();
  const [isToolsVisible, setIsToolsVisible] = useState(false);
  const {title, description} = task;

  const onEditButtonClick = () => {
    setCurrentTask(task);
    setIsEditTaskModalOpened(true);
  };

  const onDeleteButtonClick = () => {
    setCurrentTask(task);
    setIsConfirmModalOpened(true);
  };

  const dragEndHandler = (item: TaskType, currentBoard: string) => {
    dispatch(
      editTask({
        ...item,
        [currentBoard]: false,
        [currentDroppableBoard]: true,
      })
    );
  };

  return (
    <li
      className={`${styles.item}`}
      onMouseOver={() => setIsToolsVisible(true)}
      onMouseLeave={() => setIsToolsVisible(false)}
      draggable
      onDragEnd={() => dragEndHandler(task, fieldName)}
    >
      <div className={`${styles[fieldName]} ${styles.wrapper}`}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.tools} hidden={!isToolsVisible}>
          <button
            aria-label={'Редактировать задачу.'}
            className={styles.toolButton}
            onClick={onEditButtonClick}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              xmlSpace='preserve'
              width='20'
              height='20'
              viewBox='0 0 128 128'
            >
              <path d='m36.108 110.473 70.436-70.436-18.581-18.58-70.437 70.436a2.305 2.305 0 0 0-.803 1.22l-5.476 20.803c-.01.04-.01.082-.019.121a2.492 2.492 0 0 0-.039.247 2.354 2.354 0 0 0-.009.222 1.89 1.89 0 0 0 .048.471c.008.04.008.082.019.121.007.029.021.055.031.083.023.078.053.154.086.23.029.067.057.134.09.196.037.066.077.127.121.189.041.063.083.126.13.184.047.059.1.109.152.162a1.717 1.717 0 0 0 .345.283c.063.043.124.084.192.12.062.033.128.062.195.09.076.033.151.063.23.087.028.009.054.023.083.031.04.01.081.01.121.02a2.47 2.47 0 0 0 .693.039 3.26 3.26 0 0 0 .247-.039c.04-.01.082-.01.121-.02l20.804-5.475c.505-.132.92-.425 1.22-.805zm-16.457-2.124a2.313 2.313 0 0 0-1.964-.649l3.183-12.094 11.526 11.525-12.096 3.182a2.304 2.304 0 0 0-.649-1.964zM109.702 36.879l-18.58-18.581 7.117-7.117s12.656 4.514 18.58 18.582l-7.117 7.116z' />
            </svg>
          </button>
          <button aria-label={'Удалить задачу.'} className={styles.toolButton} onClick={onDeleteButtonClick}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              xmlSpace='preserve'
              width='20'
              height='20'
              viewBox='0 0 40 40'
            >
              <path d='M28 40H11.8c-3.3 0-5.9-2.7-5.9-5.9V16c0-.6.4-1 1-1s1 .4 1 1v18.1c0 2.2 1.8 3.9 3.9 3.9H28c2.2 0 3.9-1.8 3.9-3.9V16c0-.6.4-1 1-1s1 .4 1 1v18.1c0 3.2-2.7 5.9-5.9 5.9zM33.3 4.9h-7.6C25.2 2.1 22.8 0 19.9 0s-5.3 2.1-5.8 4.9H6.5C4.2 4.9 2.4 6.7 2.4 9s1.8 4 4.1 4h26.9c2.3 0 4.1-1.8 4.1-4.1s-1.9-4-4.2-4zM19.9 2c1.8 0 3.3 1.2 3.7 2.9h-7.5c.5-1.7 2-2.9 3.8-2.9zm13.4 9H6.5c-1.1 0-2.1-.9-2.1-2.1 0-1.1.9-2.1 2.1-2.1h26.9c1.1 0 2.1.9 2.1 2.1-.1 1.2-1 2.1-2.2 2.1z' />
              <path d='M12.9 35.1c-.6 0-1-.4-1-1V17.4c0-.6.4-1 1-1s1 .4 1 1v16.7c0 .5-.5 1-1 1zM26.9 35.1c-.6 0-1-.4-1-1V17.4c0-.6.4-1 1-1s1 .4 1 1v16.7c0 .5-.5 1-1 1zM19.9 35.1c-.6 0-1-.4-1-1V17.4c0-.6.4-1 1-1s1 .4 1 1v16.7c0 .5-.5 1-1 1z' />
            </svg>
          </button>
        </div>
      </div>
    </li>
  );
}
