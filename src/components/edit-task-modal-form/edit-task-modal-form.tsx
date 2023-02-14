/* eslint-disable @typescript-eslint/no-misused-promises */
import TextareaAutosize from 'react-textarea-autosize';
import styles from '../add-new-task-modal-form/add-new-task-modal-form.module.css';
import {useEffect, useState} from 'react';
import useKeydown from '../../hooks/use-key-down';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getTaskEditingStatus} from '../../store/app-process/selectors';
import {LoadingStatus} from '../../const/const';
import {useForm} from 'react-hook-form';
import {TaskType} from '../../types/types';
import {editTask} from '../../store/api-actions';
import {changeTaskEditingStatus} from '../../store/app-process/app-process';

type EditTaskModalFormPropsType = {
  isEditTaskModalOpened: boolean;
  setIsEditTaskModalOpened: (status: boolean) => void;
  currentTask: TaskType;
};

export default function EditTaskModalForm({isEditTaskModalOpened, setIsEditTaskModalOpened, currentTask}: EditTaskModalFormPropsType) {
  const dispatch = useAppDispatch();
  const [isFormDisabled, setIsFormDisabled] = useState(false);
  const taskEditingStatus = useAppSelector(getTaskEditingStatus);

  useKeydown('Escape', () => setIsEditTaskModalOpened(false));

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<TaskType>({
    mode: 'all',
    defaultValues: {
      id: currentTask.id,
      scheduled: currentTask.scheduled,
      current: currentTask.current,
      completed: currentTask.completed,
    },
  });

  const onSubmit = (task: TaskType) => {
    dispatch(editTask(task));
  };

  useEffect(() => {
    switch (taskEditingStatus) {
      case LoadingStatus.Fulfilled:
        setIsFormDisabled(false);
        setIsEditTaskModalOpened(false);
        dispatch(changeTaskEditingStatus(LoadingStatus.Idle));
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
  }, [dispatch, setIsEditTaskModalOpened, taskEditingStatus]);

  return (
    <div className={`${styles.modal} ${isEditTaskModalOpened ? styles.isActive : ''}`}>
      <div className={styles.wrapper}>
        <div className={styles.overlay} onClick={() => setIsEditTaskModalOpened(false)}></div>
        <div className={styles.content}>
          <form method='post' onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.title}>
              <label>
                <span className={styles.inputLabel}>Заголовок</span>
                <input
                  className={styles.input}
                  type='text'
                  placeholder='Заголовок задачи'
                  autoFocus
                  autoComplete='off'
                  defaultValue={currentTask.title}
                  {...register('title', {
                    required: true,
                  })}
                />
              </label>
              {errors?.title && <p className={styles.error}>Нужно указать заголовок</p>}
            </div>

            <div className={styles.description}>
              <label>
                <span className={styles.inputLabel}>Описание</span>
                <TextareaAutosize
                  className={styles.input}
                  placeholder='Описание задачи'
                  defaultValue={currentTask.description}
                  {...register('description', {
                    required: true,
                  })}
                />
              </label>
              {errors.description && <p className={styles.error}>Нужно указать описание</p>}
            </div>
            <button className={styles.submitButton} type='submit' disabled={isFormDisabled}>
              {isFormDisabled ? 'Saving...' : 'Save'}
            </button>
          </form>
          <button
            className={styles.crossButton}
            type='button'
            aria-label='Закрыть попап'
            onClick={() => setIsEditTaskModalOpened(false)}
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
