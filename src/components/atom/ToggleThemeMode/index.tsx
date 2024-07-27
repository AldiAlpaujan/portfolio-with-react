import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { IconLight } from "../icons/icon-light";
import { IconDark } from "../icons/icon-dark";

const ToggleThemeMode = () => {
  const { theme, setTheme } = useContext(ThemeContext)!;

  function handleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <a onClick={handleTheme} className={`cursor-pointer ${theme === "light" && "hover:rotate-90"} transition-all duration-300`}>
      {theme === "light" ? <IconLight /> : <IconDark />}
    </a>
  )
}

export default ToggleThemeMode;