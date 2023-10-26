import styles from './get-random-question-button.module.css';
import cn from 'classnames';

type GetRandomQuestionButtonPropsType = {
  title?: string;
  className?: string;
  onClick: () => void;
};

export default function GetRandomQuestionButton({
  title,
  className,
  onClick
}: GetRandomQuestionButtonPropsType) {
  return (
    <button className={cn(styles.button, className)} onClick={onClick}>
      {title ? title : 'Get random question'}
    </button>
  );
}
