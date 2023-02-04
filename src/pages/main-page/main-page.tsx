import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Main from '../../components/main/main';
import styles from './main-page.module.css';
import {Provider} from 'react-wrap-balancer';

export default function MainPage() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Provider>
        <Main />
      </Provider>
      <Footer />
    </div>
  );
}

