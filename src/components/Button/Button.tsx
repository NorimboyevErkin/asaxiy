import styles from "./Button.module.scss";
type Props = {
  type?: "primary" | "green";
  children: any;
  handleClick?: () => any;
};
function Button({ type, children, handleClick }: Props) {
  return (
    <button
      className={
        type === "green" ? styles["button-green"] : styles["button-primary"]
      }
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default Button;
