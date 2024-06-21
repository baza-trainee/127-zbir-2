import { FC } from "react";
import "../../styles/index.scss";
import styles from "./Target.module.scss";

const Target: FC = () => {
  return (
    <section className={`container ${styles.sectionWrapper}`}>
      <h2 className={styles.headline}>Мета збору</h2>
      <div className={styles.infoWrapper}>
        <img src="icons/big-dron.svg" alt="dron" />
        <p>Наша мета забезпечити 127 бригаду на </p>
        <p>48 000 грн</p>
      </div>
      <div className={styles.progressWrapper}>
        <div className={styles.info}>
          <p>Зібрано:</p>
          <p>з 48 000 грн</p>
        </div>
        <div className={styles.progress}>Progress</div>
      </div>
    </section>
  );
};

export default Target;
