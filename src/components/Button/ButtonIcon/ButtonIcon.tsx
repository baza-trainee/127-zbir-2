import { FC } from "react";
import ButtonIconProps from "../../../types/buttonIconType";
import styles from "./ButtonIcon.module.scss";

const ButtonIcon: FC<ButtonIconProps> = ({ variant }) => {
  const iconDronUrl = "icons/dron.svg";
  const iconArrowUrl = "icons/arrow.svg";
  const icon =
    variant === "support" ? (
      <img src={iconDronUrl} alt="drone icon" className={styles.buttonIcon} />
    ) : (
      <div className={styles.arrowIconWrapper}>
        <img
          src={iconArrowUrl}
          alt="arrow icon"
          className={`${styles.buttonIcon} ${styles.arrowIconOne}`}
        />
        {/* <img
          src={iconArrowUrl}
          alt="arrow icon"
          className={`${styles.buttonIcon} ${styles.arrowIconTwo}`}
        /> */}
      </div>
    );

  return icon;
};

export default ButtonIcon;
