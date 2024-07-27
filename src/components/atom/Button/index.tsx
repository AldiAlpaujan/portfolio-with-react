interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="
      py-[8px] px-[26px] text-base font-medium tracking-wide border-light-title border-2 rounded-lg
      hover:text-white hover:bg-primary hover:border-primary hover:shadow-lg
      transition-all duration-200
    ">
      {children}
    </button>
  );
};

export default Button;