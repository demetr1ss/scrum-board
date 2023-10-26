import styles from './get-random-question-button.module.css';
import cn from 'classnames';

type GetRandomQuestionButtonPropsType = {
  setIsModalOpened: (status: boolean) => void;
  title?: string;
  className?: string;
};

export default function GetRandomQuestionButton({
  setIsModalOpened,
  title,
  className,
}: GetRandomQuestionButtonPropsType) {
  return (
    <button className={cn(styles.button, className)} onClick={() => setIsModalOpened(true)}>
      {title ? title : 'Get random question'}
    </button>
  );
}
