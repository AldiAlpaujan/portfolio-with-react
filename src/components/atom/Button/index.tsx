import "./index.css";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  type?: "primary" | "secondary" | "mobile-menu-button";
  onClick?: () => void,
}

const Button = ({ children, style, type, className, onClick }: ButtonProps) => {
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
      onClick={onClick}
      style={style}
      className={`font-Montserrat button ${buttonType} ${className}`}>
      {children}
    </button>
  );
};

export default Button;