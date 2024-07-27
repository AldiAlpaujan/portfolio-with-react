import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import BurgerMenu from "../../atom/BurgerMenu";
import Button from "../../atom/Button";
import HeaderLogo from "../../atom/HeaderLogo";
import { IconLight } from "../../atom/icons/icon-light";
import { menu } from "./data";
import { IconDark } from "../../atom/icons/icon-dark";

const Header = () => {
  return (
    <nav className="bg-transparent w-full fixed z-10">
      <div className="container py-4 flex justify-between items-center">
        <HeaderLogo />
        <Menu />
        <Action />
      </div>
    </nav>
  );
}


const Menu = () => {
  return (
    <div className="hidden lg:block">
      <ul className="flex gap-7 xl:gap-10 2xl:gap-11">
        {menu.map((item) => (
          <li key={item.name} className="
            cursor-pointer text-black font-medium
            dark:text-[#C1C1C1] 
            hover:font-semibold hover:text-primary dark:hover:text-primary 
            transition-all duration-300">
            <a >{item.name} </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

const Action = () => {
  const { theme, setTheme } = useContext(ThemeContext)!;

  function handleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <>
      <BurgerMenu className="lg:hidden" />
      <div className="hidden lg:flex gap-7 items-center">
        <a onClick={handleTheme} className={`cursor-pointer ${theme === "light" && "hover:rotate-90"} transition-all duration-300`}>
          {theme === "light" ? <IconLight /> : <IconDark />}
        </a>
        <Button >Download CV</Button>
      </div>
    </>
  );
}

export default Header;