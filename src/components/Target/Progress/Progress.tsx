import { FC } from "react";
import ProgressType from "../../../types/progressType";
import styles from "./Progress.module.scss";

const Progress: FC<ProgressType> = () => {
  // const Progress: FC<ProgressType> = ({ balance }) => {
  // const width = balance ? `${(balance / 500).toFixed(1)}%` : "0%";
  const width = "200px";
  return (
    <div className={styles.progressWrapper}>
      <div className={styles.progress} style={{ width: width }}></div>
    </div>
  );
};

export default Progress;
