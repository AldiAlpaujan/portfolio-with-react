import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

interface ToggleThemeModeProps {
  className?: string;
  style?: React.CSSProperties;
}

const ToggleThemeMode = ({ className, style }: ToggleThemeModeProps) => {
  const { theme, setTheme } = useContext(ThemeContext)!;

  function handleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <button onClick={handleTheme} className={`cursor-pointer flex items-center gap-2 ${className} group`} style={style}>
      <div className={`w-[30px] h-[30px] flex justify-center ${theme === "light" && "group-hover:rotate-90"} transition-all duration-300`} >
        {
          theme === "light" ?
            <i className="ic-light text-2xl text-white lg:text-black" /> :
            <i className="ic-dark text-2xl text-white" />
        }
      </div>
      <p className="text-white text-lg font-medium lg:hidden">
        Switch theme
      </p>
    </button>
  )
}

export default ToggleThemeMode;