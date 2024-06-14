import React from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header} id="header">
      <div className={styles.header__container} >
        <img src="src/assets/icons/burger-menu.svg" alt="Menu" className={styles.header__menu} />
        <img
          src="src/assets/images/logo.png"
          alt="Logo"
          className={styles.header__logo}
        />

        <ul className={styles.header__nav}>
          <li className={styles.header__item}>
            <a href="#" className={styles.header__link}>Мета</a>
          </li>

          <li className={styles.header__item}>
            <a href="#" className={styles.header__link}>Бригада</a>
          </li>

          <li className={styles.header__item}>
            <a href="#" className={styles.header__link}>Як це працює</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
