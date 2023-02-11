import styles from './loading-screen.module.css';

export default function LoadingScreen(): JSX.Element {
  return (
    <div className={styles.container} data-testid='loading-screen'>
      <div className={styles['loadingio-spinner-ellipsis-ag7tpvlhln6']}>
        <div className={styles['ldio-yr2ov96pdsr']}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
