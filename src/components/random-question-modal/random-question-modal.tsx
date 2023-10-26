import styles from '../add-new-task-modal-form/add-new-task-modal-form.module.css';
import GetRandomQuestionButton from '../get-random-question-button/get-random-question-button';

type RandomQuestionModalPropsType = {
  isGetRandomQuestionModalOpened: boolean;
  setIsGetRandomQuestionModalOpened: (status: boolean) => void;
  question: string;
};

export default function RandomQuestionModal({
  isGetRandomQuestionModalOpened,
  setIsGetRandomQuestionModalOpened,
  question,
}: RandomQuestionModalPropsType) {
  return (
    <div className={`${styles.modal} ${isGetRandomQuestionModalOpened ? styles.isActive : ''}`}>
      <div className={styles.wrapper}>
        <div className={styles.overlay} onClick={() => setIsGetRandomQuestionModalOpened(false)}></div>
        <div className={styles.content}>
          <h2 className={styles.title}>Случайный вопрос</h2>
          <p className={styles.text}>{question}?</p>
          <GetRandomQuestionButton
            title='Другой вопрос'
            setIsModalOpened={setIsGetRandomQuestionModalOpened}
          />
          <button
            className={styles.crossButton}
            type='button'
            aria-label='Закрыть попап'
            onClick={() => setIsGetRandomQuestionModalOpened(false)}
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
