import { FC } from "react";
import styles from "./Footer.module.scss";

const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.footerText}>
        Розробка Baza Trainee Ukraine 2024 ©. Всі права захищені.
      </p>
    </div>
  );
};

export default Footer;
