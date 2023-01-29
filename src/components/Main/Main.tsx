import AddTaskButton from './AddTaskButton/AddTaskButton';
import styles from './Main.module.css';

export default function Main() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Scrum board</h1>
      <AddTaskButton />
      <section className="main__board board">
        <ul className="board__list board-list">
          <li className="board-list__item scheduled-field">
            <h2 className="scheduled-field__title">Запланировано</h2>
            <ul className="scheduled-field__list">
              <li className="scheduled-field__item scheduled-task">
                <h3 className="scheduled-task__title">
                  Запланированная задача
                </h3>
                <p className="scheduled-task__description">
                  Описание задачи
                </p>
              </li>
            </ul>
          </li>
          <li className="board-list__item current-field">
            <h2 className="current-field__title">В работе</h2>
            <ul className="current-field__list">
              <li className="current-field__item current-task">
                <h3 className="current-task__title">
                  Задача в работе
                </h3>
                <p className="current-task__description">
                  Описание задачи
                </p>
              </li>
            </ul>
          </li>
          <li className="board-list__item completed-field">
            <h2 className="completed-field__title">Готово</h2>
            <ul className="completed-field__list">
              <li className="completed-field__item completed-task">
                <h3 className="completed-task__title">
                  Готовая задача
                </h3>
                <p className="completed-task__description">
                  Описание задачи
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </main>
  );
}
