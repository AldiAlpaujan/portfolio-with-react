interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="
      py-[8px] px-[26px] xl:py-[12px] text-base font-medium tracking-wide border-light-title border-2 rounded-lg
      hover:text-white hover:bg-primary hover:border-primary hover:shadow-lg
      dark:border-primary dark:text-white
      dark:hover:bg-transparent dark:hover:border-primary
      transition-all duration-200
    ">
      {children}
    </button>
  );
};

export default Button;