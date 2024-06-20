import { FC } from "react";
import ButtonIconProps from "../../../types/buttonIconType";
import styles from "./ButtonIcon.module.scss";

const ButtonIcon: FC<ButtonIconProps> = ({ variant }) => {
  const iconDronUrl = "dron.svg";
  const iconArrowUrl = "arrow.svg";
  const icon =
    variant === "support" ? (
      <img src={iconDronUrl} alt="drone icon" className={styles.buttonIcon} />
    ) : (
      <img src={iconArrowUrl} alt="arrow icon" className={styles.buttonIcon} />
    );

  return icon;
};

export default ButtonIcon;
