import { FC } from "react";
import Button from "../Button/Button";
import "../../styles/index.scss";
import styles from "./Hero.module.scss";

const Hero: FC = () => {
  return (
    <section className={styles.heroWrapper}>
      <div className="container">
        <h1 className={styles.headline}>
          Збір на дрони для 127-мої бригади ТРО ЗСУ{" "}
        </h1>
      </div>
      <div className={styles.buttonWrapper}>
        <Button variant="support" label="Підтримати" />
        <Button variant="share" label="Поділитися" />
      </div>
    </section>
  );
};

export default Hero;
