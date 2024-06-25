import { FC } from "react";
import ButtonIcon from "./ButtonIcon/ButtonIcon";
import ButtonProps from "../../types/buttonType";
import styles from "./Button.module.scss";
import { useAppContext } from "../../hooks/useAppContext";

const Button: FC<ButtonProps> = ({
  label,
  variant = "support",
  className = "",
}) => {
  const { handleModal } = useAppContext();
  const style = `${styles.button} ${
    variant && styles[`button_${variant}`]
  } ${className}`;

  const link =
    variant === "support"
      ? "https://send.monobank.ua/jar/59VyL3wf5m"
      : undefined;

  return (
    <a
      className={style}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onClick={variant === "share" ? handleModal : () => {}}
    >
      {/* <button className={style} tabIndex={tabIndex} onClick={variant === "share" ? handleModal : () => {}}> */}
      <div
        className={
          variant === "support"
            ? styles.textWrapper
            : variant === "share"
            ? styles.textShareWrapper
            : styles.textCopyLinkWrapper
        }
      >
        {label}
      </div>
      <div
        className={
          variant === "support"
            ? styles.iconWrapper
            : variant === "share"
            ? styles.iconShareWrapper
            : styles.iconCopyLinkWrapper
        }
      >
        {variant !== "copyLink" && <ButtonIcon variant={variant} />}
      </div>
    </a>
  );
};

export default Button;
