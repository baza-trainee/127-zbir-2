import ButtonIcon from "./ButtonIcon/ButtonIcon";
import ButtonProps from "../../types/buttonType";
import styles from "./Button.module.scss";

const Button: React.FC<ButtonProps> = ({
  label,
  variant = "support",
  className = "",
  tabIndex,
}) => {
  const style = `${styles.button} ${
    variant && styles[`button_${variant}`]
  } ${className}`;

  return (
    <button className={style} tabIndex={tabIndex}>
      {/* <div className={styles.buttonContentWrapper}> */}
      <div
        className={
          variant === "support" ? styles.textWrapper : styles.textShareWrapper
        }
      >
        {label}
      </div>
      <div
        className={
          variant === "support" ? styles.iconWrapper : styles.iconShareWrapper
        }
      >
        <ButtonIcon variant={variant} />
      </div>
      {/* </div> */}
    </button>
  );
};

export default Button;
