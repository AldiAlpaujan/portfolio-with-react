import "./index.css";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  type?: "primary" | "secondary" | "mobile-menu-button";
}

const Button = ({ children, style, type, className }: ButtonProps) => {
  let buttonType = "button-primary";
  if (type === "primary") {
    buttonType = "button-primary";
  } else if (type === "secondary") {
    buttonType = "button-secondary";
  } else if (type === "mobile-menu-button") {
    buttonType = "button-mobile-menu";
  }
  return (
    <button
      style={style}
      className={`button ${buttonType} ${className}`}>
      {children}
    </button>
  );
};

export default Button;