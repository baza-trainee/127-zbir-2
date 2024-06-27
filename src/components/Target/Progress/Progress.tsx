import { FC } from "react";
import ProgressType from "../../../types/progressType";
import styles from "./Progress.module.scss";

const Progress: FC<ProgressType> = ({ balance }) => {
  const width = balance ? `${Math.floor(balance)}%` : "0%";

  return (
    <div className={styles.progressWrapper}>
      <div className={styles.progress} style={{ width: width }}></div>
    </div>
  );
};

export default Progress;
