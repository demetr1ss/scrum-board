import {useEffect, useState} from 'react';
import {LoadingStatus} from '../../const/const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import useKeydown from '../../hooks/use-key-down';
import {deleteTask} from '../../store/api-actions';
import {changeTaskDeletingStatus} from '../../store/app-process/app-process';
import {getTaskDeletingStatus} from '../../store/app-process/selectors';
import {TaskType} from '../../types/types';
import styles from './confirm-modal.module.css';

type ConfirmModalPropsType = {
  isConfirmModalOpened: boolean;
  setIsConfirmModalOpened: (status: boolean) => void;
  currentTask: TaskType;
};

export default function ConfirmModal({
  isConfirmModalOpened,
  setIsConfirmModalOpened,
  currentTask,
}: ConfirmModalPropsType) {
  const dispatch = useAppDispatch();
  const [isFormDisabled, setIsFormDisabled] = useState(false);
  const taskDeletingStatus = useAppSelector(getTaskDeletingStatus);
  const onDeleteButtonClick = () => {
    dispatch(deleteTask(currentTask.id));
  };

  useKeydown('Escape', () => setIsConfirmModalOpened(false));

  useEffect(() => {
    switch (taskDeletingStatus) {
      case LoadingStatus.Fulfilled:
        setIsFormDisabled(false);
        setIsConfirmModalOpened(false);
        dispatch(changeTaskDeletingStatus(LoadingStatus.Idle));
        break;
      case LoadingStatus.Idle:
        setIsFormDisabled(false);
        break;
      case LoadingStatus.Pending:
        setIsFormDisabled(true);
        break;
      case LoadingStatus.Rejected:
        setIsFormDisabled(false);
        break;
    }
  }, [dispatch, setIsConfirmModalOpened, taskDeletingStatus]);

  return (
    <div className={`${styles.modal} ${isConfirmModalOpened ? styles.isActive : ''}`}>
      <div className={styles.wrapper}>
        <div className={styles.overlay} onClick={() => setIsConfirmModalOpened(false)}></div>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Delete this task?
          </h2>
          <div className={styles.buttonsWrapper}>
            <button
              className={styles.deleteButton}
              type='button'
              disabled={isFormDisabled}
              onClick={onDeleteButtonClick}
            >
              Yes
            </button>
            <button
              className={styles.cancelButton}
              type='button'
              disabled={isFormDisabled}
              onClick={() => setIsConfirmModalOpened(false)}
            >
              No
            </button>
          </div >
          <button
            className={styles.crossButton}
            type='button'
            aria-label='Закрыть попап'
            onClick={() => setIsConfirmModalOpened(false)}
          >
            <svg
              className={styles.buttonLogo}
              width='12'
              height='12'
              viewBox='0 0 10 10'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1.70711 0.292893C1.31658 -0.0976311 0.683418 -0.0976311 0.292893 0.292893C-0.0976311 0.683418 -0.0976311 1.31658 0.292893 1.70711L3.58579 5L0.292893 8.29289C-0.0976311 8.68342 -0.0976311 9.31658 0.292893 9.70711C0.683418 10.0976 1.31658 10.0976 1.70711 9.70711L5 6.41421L8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711C10.0976 9.31658 10.0976 8.68342 9.70711 8.29289L6.41421 5L9.70711 1.70711C10.0976 1.31658 10.0976 0.683418 9.70711 0.292893C9.31658 -0.0976311 8.68342 -0.0976311 8.29289 0.292893L5 3.58579L1.70711 0.292893Z'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
