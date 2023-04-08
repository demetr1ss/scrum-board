/* eslint-disable @typescript-eslint/no-misused-promises */
import cn from 'classnames';
import useKeydown from '../../hooks/use-key-down';
import styles from './change-status-modal.module.css';
import {ChangeEvent, useEffect, useState} from 'react';
import {AdaptedTitle, LoadingStatus, Title} from '../../const/const';
import {TaskType} from '../../types/types';
import {getTaskEditingStatus} from '../../store/app-process/selectors';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeTaskEditingStatus} from '../../store/app-process/app-process';
import {FieldValues, useForm} from 'react-hook-form';
import {editTask} from '../../store/api-actions';
// import {editTask} from '../../store/api-actions';

type ChangeStatusModalPropsType = {
  isChangeStatusModalOpened: boolean;
  setIsChangeStatusModalOpened: (status: boolean) => void;
  currentTask: TaskType;
};

export default function ChangeStatusModal({
  isChangeStatusModalOpened,
  setIsChangeStatusModalOpened,
  currentTask,
}: ChangeStatusModalPropsType) {
  const dispatch = useAppDispatch();
  const [isFormDisabled, setIsFormDisabled] = useState(false);
  const taskEditingStatus = useAppSelector(getTaskEditingStatus);
  const initialStatus = Object.keys(currentTask)
    .filter((key) => currentTask[key as keyof typeof currentTask] === true)
    .join();
  const [status, setStatus] = useState(initialStatus);

  useKeydown('Escape', () => setIsChangeStatusModalOpened(false));

  const {register, handleSubmit} = useForm({
    defaultValues: {
      status: initialStatus,
    },
  });

  const onSubmit = (data: FieldValues) => {
    dispatch(
      editTask({
        ...currentTask,
        [initialStatus]: false,
        [status]: true,
      })
    );
  };

  useEffect(() => {
    switch (taskEditingStatus) {
      case LoadingStatus.Fulfilled:
        setIsFormDisabled(false);
        setIsChangeStatusModalOpened(false);
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
  }, [dispatch, setIsChangeStatusModalOpened, taskEditingStatus]);

  const setLabelClassName = (item: string) =>
    cn(styles.inputLabel, {
      [styles.isChecked]: status === item,
    });

  const changeStatusButtonClassName = cn(styles.submitButton, {
    [styles.buttonLoader]: isFormDisabled,
  });

  return (
    <div className={`${styles.modal} ${isChangeStatusModalOpened ? styles.isActive : ''}`}>
      <div className={styles.wrapper}>
        <div className={styles.overlay} onClick={() => setIsChangeStatusModalOpened(false)}></div>
        <div className={styles.content}>
          <form method='post' onSubmit={handleSubmit(onSubmit)}>
            <h2 className={styles.title}>Укажите актуальный статус задачи</h2>
            <ul className={styles.controlsList}>
              {Object.keys(Title).map((item) => (
                <li className={styles.controlsItem} key={item}>
                  <label className={setLabelClassName(item)}>
                    <input
                      className='visually-hidden'
                      type='radio'
                      id={item}
                      value={item}
                      checked={status === item}
                      {...register('status', {
                        onChange: (evt: ChangeEvent<HTMLInputElement>) => setStatus(evt.target.value),
                      })}
                    />
                    <span className={styles.labelText}>{AdaptedTitle[item]}</span>
                  </label>
                </li>
              ))}
            </ul>
            <button className={changeStatusButtonClassName} type='submit' disabled={isFormDisabled}>
              {isFormDisabled ? '' : 'Save'}
            </button>
          </form>
          <button
            className={styles.crossButton}
            type='button'
            aria-label='Закрыть попап'
            onClick={() => setIsChangeStatusModalOpened(false)}
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
