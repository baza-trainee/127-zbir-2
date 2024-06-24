import ButtonIcon from "./ButtonIcon/ButtonIcon";
import ButtonProps from "../../types/buttonType";
import styles from "./Button.module.scss";

const Button: React.FC<ButtonProps> = ({
  label,
  variant = "support",
  className = "",
}) => {
  const style = `${styles.button} ${
    variant && styles[`button_${variant}`]
  } ${className}`;

  return (
    <a
      className={style}
      href="https://send.monobank.ua/jar/59VyL3wf5m"
      target="_blank"
      rel="noopener noreferrer"
    >
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
    </a>
  );
};

export default Button;
