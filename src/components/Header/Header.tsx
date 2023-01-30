import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src="img/scrum-svgrepo-com.svg" width={92} height={92} alt="scrum board logo." />
    </header>
  );
}
