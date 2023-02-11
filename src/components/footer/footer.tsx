import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.list}>
        <li className='social__item'>
          <a className={styles.link} href='https://vk.com/d_telitsyn' target='_blank' rel='noreferrer'>
            <svg className={styles.logo} xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 48 48'>
              <path d='M5.436 10.957c-2.242 0-3.949 2.204-3.33 4.371 1.609 5.649 3.995 11.18 7.556 15.53 3.561 4.349 8.378 7.501 14.537 8.126 2.05.208 3.819-1.463 3.819-3.49v-4.047c0-.252.172-.432.369-.437l.084-.002c.707 0 2.16.886 3.437 2.263 1.277 1.378 2.406 3.083 2.95 4.028v.002a3.438 3.438 0 0 0 2.978 1.71h4.873c2.427.003 4.051-2.74 2.863-4.863-1.864-3.335-5.585-6.634-7.445-8.279 3.409-3.743 5.668-7.822 6.67-10.527.756-2.044-.803-4.344-3-4.344h-3.479c-1.512 0-2.921.737-3.498 1.916-2.707 5.548-5.12 7.585-6.82 9.053v-7.528c0-1.877-1.558-3.426-3.43-3.43L18.48 11c-1.94-.002-3.143 2.393-1.981 3.947l1.176 1.574.002.004c.201.267.308.586.308.914v.002l.024 6.278c-2.423-2.556-5.055-7.968-5.85-10.383v-.002a3.465 3.465 0 0 0-3.271-2.367h-.002l-3.447-.01h-.002zm0 3 3.443.01c.212 0 .367.115.43.304.986 3 3.577 8.714 6.863 11.915.853.83 2.105 1 3.076.605.97-.394 1.762-1.416 1.762-2.615v-.002l-.026-6.735c0-.98-.32-1.934-.91-2.716l-.002-.004-.537-.717 5.03.008c.262 0 .435.171.435.43v7.603c0 2.435 3.066 3.834 4.91 2.242h.002c1.69-1.46 4.68-4.065 7.604-10.055.067-.138.008-.232.802-.232h3.479c.202 0 .262.096.185.303-.85 2.298-3.021 6.306-6.24 9.773-.992 1.07-.951 2.835.17 3.828 1.758 1.555 5.595 5.124 7.041 7.71.132.236.033.4-.242.4h-4.875a.427.427 0 0 1-.379-.21c-.65-1.129-1.841-2.944-3.348-4.57-1.506-1.625-3.3-3.224-5.638-3.224-.067 0-.12 0-.162.002h-.006c-1.862.052-3.285 1.632-3.285 3.437v4.047c0 .311-.24.534-.516.506-5.324-.54-9.336-3.156-12.52-7.043C8.8 25.07 6.526 19.895 4.99 14.506c-.086-.301.099-.549.446-.549z' />
            </svg>
          </a>
        </li>
        <li className='social__item'>
          <a className={styles.link} href='https://t.me/d_telitsyn' target='_blank' rel='noreferrer'>
            <svg className={styles.logo} xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 48 48'>
              <path d='M44.377 5.986c-.487.022-.961.157-1.389.328-.423.17-2.86 1.21-6.457 2.748a20314.52 20314.52 0 0 0-12.91 5.528c-9.272 3.972-18.383 7.88-18.383 7.88l.067-.025s-.55.184-1.108.573a3.078 3.078 0 0 0-.824.81 2.145 2.145 0 0 0-.357 1.432c.237 1.925 2.232 2.47 2.232 2.47l.008.004 8.902 3.047c.227.757 2.7 9.012 3.244 10.76.3.966.582 1.524.875 1.904.147.19.301.338.471.446.068.042.139.075.209.103h.004c.009.004.017.004.025.008l-.023-.006c.016.007.032.018.049.024.031.01.05.01.092.02 1.02.355 1.863-.306 1.863-.306l.035-.027 5.469-5.072 8.875 6.92.111.05c1.553.69 2.958.305 3.736-.328s1.084-1.449 1.084-1.449l.034-.086 6.521-33.99c.167-.76.19-1.418.033-2.012-.157-.594-.54-1.11-1.02-1.396a2.588 2.588 0 0 0-1.468-.358zm.053 2.034c.197-.01.344.013.39.04.047.028.067.024.112.192.044.167.068.52-.053 1.072l-.004.012-6.484 33.793c-.016.034-.15.347-.46.598-.314.256-.664.456-1.593.066l-9.705-7.568-.274-.215-.005.006-2.903-2.178 16.31-19.19A1 1 0 0 0 38.976 13a1 1 0 0 0-.53.168L14.844 28.902 5.928 25.85s-.886-.493-.928-.836c-.002-.02-.013-.002.033-.07.046-.07.162-.185.307-.286.29-.202.62-.324.62-.324l.034-.012.033-.013s9.112-3.91 18.383-7.881c4.636-1.986 9.312-3.988 12.908-5.526 3.596-1.537 6.194-2.644 6.414-2.732.25-.1.5-.141.698-.15zM33.613 18.793 21.244 33.346l-.006.006a1 1 0 0 0-.054.072 1 1 0 0 0-.055.084 1 1 0 0 0-.131.385 1 1 0 0 0 0 .007l-1.611 7.246c-.027-.078-.046-.106-.075-.199v-.002c-.511-1.644-2.845-9.429-3.167-10.506l17.468-11.646zM22.641 35.73l2.222 1.668-3.265 3.028 1.043-4.696z' />
            </svg>
          </a>
        </li>
        <li className='social__item'>
          <a className={styles.link} href='https://github.com/demetr1ss' target='_blank' rel='noreferrer'>
            <svg className={styles.logo} xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 24 24'>
              <path d='M10.9 2.1c-4.6.5-8.3 4.2-8.8 8.7-.5 4.7 2.2 8.9 6.3 10.5.3.1.6-.1.6-.5v-1.6s-.4.1-.9.1c-1.4 0-2-1.2-2.1-1.9-.1-.4-.3-.7-.6-1-.3-.1-.4-.1-.4-.2 0-.2.3-.2.4-.2.6 0 1.1.7 1.3 1 .5.8 1.1 1 1.4 1 .4 0 .7-.1.9-.2.1-.7.4-1.4 1-1.8-2.3-.5-4-1.8-4-4 0-1.1.5-2.2 1.2-3-.1-.2-.2-.7-.2-1.4 0-.4 0-1 .3-1.6 0 0 1.4 0 2.8 1.3.5-.2 1.2-.3 1.9-.3s1.4.1 2 .3C15.3 6 16.8 6 16.8 6c.2.6.2 1.2.2 1.6 0 .8-.1 1.2-.2 1.4.7.8 1.2 1.8 1.2 3 0 2.2-1.7 3.5-4 4 .6.5 1 1.4 1 2.3v2.6c0 .3.3.6.7.5 3.7-1.5 6.3-5.1 6.3-9.3 0-6-5.1-10.7-11.1-10z' />
            </svg>
          </a>
        </li>
      </ul>
    </footer>
  );
}
