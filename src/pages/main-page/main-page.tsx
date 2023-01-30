import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Main from '../../components/main/main';
import styles from './MainPage.module.css';

export default function MainPage() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

