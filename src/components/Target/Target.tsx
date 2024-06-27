import { FC } from "react";
import Progress from "./Progress/Progress";
import "../../styles/index.scss";
import styles from "./Target.module.scss";
import { useAppContext } from "../../hooks/useAppContext";

const Target: FC = () => {
  const { data } = useAppContext();

  return (
    <section className={`container ${styles.sectionWrapper}`} id="target">
      <h2 className={styles.headline}>Мета збору</h2>
      <div className={styles.infoWrapper}>
        <img src="icons/big-dron.svg" alt="dron" />
        <p>Наша мета забезпечити 127 бригаду на </p>
        {data && <p>{data.goal / 100} грн</p>}
      </div>
      <div className={styles.progressWrapper}>
        <div className={styles.info}>
          {data && <p>Зібрано:{" "}{data.amount / 100}{" "}грн</p>}
          {data && <p>з{" "}{data.goal / 100}{" "}грн</p>}
        </div>
        <Progress balance={data && data.amount / data.goal * 100} />
      </div>
    </section>
  );
};

export default Target;
