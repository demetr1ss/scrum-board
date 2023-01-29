import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="footer__social social">
        <ul className="social__list">
          <li className="social__item">
            <a href="/" className="social__link social__link--vk">VK</a>
          </li>
          <li className="social__item">
            <a href="/" className="social__link social__link--tg">Telegram</a>
          </li>
        </ul>
      </div>
      <div className="footer__copyright copyright">
        <a className="copyright__link" href="/">Dmitry Telitsyn</a>
      </div>
    </footer>
  );
}
