import ButtonIcon from "./ButtonIcon/ButtonIcon";
import ButtonProps from "../../types/buttonType";
import styles from "./Button.module.scss";
import { useAppContext } from "../../hooks/useAppContext";

const Button: React.FC<ButtonProps> = ({
  label,
  variant = "support",
  className = "",
  tabIndex,
}) => {
  const { handleModal } = useAppContext();
  const style = `${styles.button} ${
    variant && styles[`button_${variant}`]
    } ${className}`;

  return (
    <button className={style} tabIndex={tabIndex} onClick={variant === "share" ? handleModal : () => {}}>
      <div
        className={
          variant === "support" ? styles.textWrapper : variant === "share" ? styles.textShareWrapper : styles.textCopyLinkWrapper
        }
      >
        {label}
      </div>
      <div
        className={
          variant === "support" ? styles.iconWrapper : variant === 'share' ? styles.iconShareWrapper : styles.iconCopyLinkWrapper
        }
      >
        {variant !== "copyLink" && (
          <ButtonIcon variant={variant} />
        )}
      </div>
    </button>
  );
};

export default Button;
