import ButtonProps from "../../types/buttonType";
import style from "./Button.module.scss";

const Button: React.FC<ButtonProps> = ({
  label,
  variant = "support",
  className = "",
  tabIndex,
}) => {
  const styles = `${style.button} ${
    variant && style[`button_${variant}`]
  } ${className}`;

  return (
    <button className={styles} tabIndex={tabIndex}>
      {label}
    </button>
  );
};

export default Button;
