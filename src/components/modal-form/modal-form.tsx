/* eslint-disable @typescript-eslint/no-misused-promises */
import TextareaAutosize from 'react-textarea-autosize';
import styles from './modal-form.module.css';
import {useEffect, useState} from 'react';
import useKeydown from '../../hooks/use-key-down';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getTaksSendingStatus} from '../../store/app-process/selectors';
import {LoadingStatus} from '../../consts/const';
import {useForm} from 'react-hook-form';
import {TaskType} from '../../types/types';
import {sendTask} from '../../store/api-actions';
import {changeTaskSendingStatus} from '../../store/app-process/app-process';

type ModalFormPropsType = {
  isModalOpened: boolean;
  setIsModalOpened: (status: boolean) => void;
}

export default function ModalForm({isModalOpened, setIsModalOpened}: ModalFormPropsType) {
  const dispatch = useAppDispatch();
  const [isFormDisabled, setIsFormDisabled] = useState(false);
  const taskSendingStatus = useAppSelector(getTaksSendingStatus);

  useKeydown('Escape', () => setIsModalOpened(false));

  const {register, handleSubmit, formState: {errors}} = useForm<TaskType>({
    mode: 'all',
    defaultValues: {
      scheduled: true,
      current: false,
      completed: false
    }
  });

  const onSubmit = (task: TaskType) => {
    dispatch(sendTask(task));
  };


  useEffect(() => {
    switch (taskSendingStatus) {
      case LoadingStatus.Fulfilled:
        setIsFormDisabled(false);
        setIsModalOpened(false);
        dispatch(changeTaskSendingStatus(LoadingStatus.Idle));
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
  }, [dispatch, setIsModalOpened, taskSendingStatus]);

  return (
    <div className={`${styles.modal} ${isModalOpened ? styles.isActive : ''}`}>
      <div className={styles.wrapper}>
        <div className={styles.overlay} onClick={() => setIsModalOpened(false)}>
        </div>
        <div className={styles.content}>
          <form method="post" onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.title}>
              <label>
                <span className={styles.inputLabel}>
                  Заголовок
                </span>
                <input
                  className={styles.input}
                  type="text"
                  placeholder='Заголовок задачи'
                  autoFocus
                  autoComplete="off"
                  {...register('title', {
                    required: true
                  })}
                />
              </label>
              {errors?.title && <p className={styles.error}>Нужно указать заголовок</p>}
            </div>

            <div className={styles.description}>
              <label>
                <span className={styles.inputLabel}>
                  Описание
                </span>
                <TextareaAutosize
                  className={styles.input}
                  placeholder='Описание задачи'
                  {...register('description', {
                    required: true
                  })}
                />
              </label>
              {errors.description && <p className={styles.error}>Нужно указать описание</p>}
            </div>
            <button className={styles.submitButton} type="submit" disabled={isFormDisabled}>
              {isFormDisabled ? 'Adding..' : 'Add Task'}
            </button>
          </form>
          <button
            className={styles.crossButton}
            type="button"
            aria-label="Закрыть попап"
            onClick={() => setIsModalOpened(false)}
          >
            <svg className={styles.buttonLogo} width="12" height="12" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M1.70711 0.292893C1.31658 -0.0976311 0.683418 -0.0976311 0.292893 0.292893C-0.0976311 0.683418 -0.0976311 1.31658 0.292893 1.70711L3.58579 5L0.292893 8.29289C-0.0976311 8.68342 -0.0976311 9.31658 0.292893 9.70711C0.683418 10.0976 1.31658 10.0976 1.70711 9.70711L5 6.41421L8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711C10.0976 9.31658 10.0976 8.68342 9.70711 8.29289L6.41421 5L9.70711 1.70711C10.0976 1.31658 10.0976 0.683418 9.70711 0.292893C9.31658 -0.0976311 8.68342 -0.0976311 8.29289 0.292893L5 3.58579L1.70711 0.292893Z" />
            </svg>

          </button>
        </div>
      </div>
    </div>
  );
}
