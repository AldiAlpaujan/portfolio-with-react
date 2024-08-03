import { useContext, useEffect, useRef, useState } from "react";
import { BurgerMenuContext } from "../../../context/BurgerMenuContext";
import { menu } from "./data";
import { ThemeContext } from "../../../context/ThemeContext";
import { HeaderMenuContext } from "../../../context/HeaderMenuContext";
import Button from "../../atom/Button";
import ToggleThemeMode from "../../atom/ToggleThemeMode";

interface HeaderMenuProps {
  type: "mobile" | "desktop",
}

const HeaderMenu = ({ type }: HeaderMenuProps) => {
  return type === "mobile" ? <Mobile /> : <Desktop />;
}

const Mobile = () => {
  const dividerRef = useRef<HTMLDivElement>(null);
  const { activeMenu, setActiveMenu } = useContext(HeaderMenuContext)!;
  const { isOpen, setIsOpen } = useContext(BurgerMenuContext)!;
  const { theme } = useContext(ThemeContext)!;
  const [menuOpacity, setMenuOpacity] = useState(0);
  const [menuActiveOpacity, setMenuActiveOpacity] = useState(0);
  const [actionOpacity, setActionOpacity] = useState(0);
  const [removeDelay, setRemoveDelay] = useState(false);
  const [top, setTop] = useState(15);
  let delay = 0;

  const getDelay = (): number => {
    const value = delay;
    delay += 100;
    return value;
  }

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setMenuOpacity(.7);
        setMenuActiveOpacity(1);
        setActionOpacity(.9);
        setTop(0);
        dividerRef.current?.classList.add("scale-100");
        setTimeout(() => {
          dividerRef.current?.classList.remove("scale-0");
        }, 500);
        setTimeout(() => {
          setRemoveDelay(true);
        }, 500);
      }, 300);
    } else {
      setRemoveDelay(false);
      dividerRef.current?.classList.remove("scale-100");
      dividerRef.current?.classList.add("scale-0");
      setMenuOpacity(0);
      setMenuActiveOpacity(0);
      setActionOpacity(0);
      setTop(-15);
      setTimeout(() => {
        setTop(15);
      }, 1000);
    }
  }, [isOpen]);

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(false);
    }, 200);
  }, [setIsOpen, activeMenu]);

  useEffect(() => {
    setIsOpen(false);
  }, [setIsOpen, theme]);

  return (
    <div className="mx-2 flex flex-col gap-7">
      <ul className="flex flex-col gap-7">
        {menu.map((item) => (
          <li key={item.name}
            className="flex items-center gap-2 text-white text-lg font-medium active:opacity-100 ease-in-out transition-all duration-500"
            style={{
              position: "relative",
              top: `${top}px`,
              opacity: item.name == activeMenu ? menuActiveOpacity : menuOpacity,
              transitionDelay: removeDelay ? "0ms" : `${getDelay()}ms`,
            }}
          >
            <div className={`${item.name == activeMenu ? "ml-2 w-[18px]" : "w-0"} h-[0.1px] bg-white rounded-lg transition-all duration-300`} />
            <a onClick={() => setActiveMenu(item.name)}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <div ref={dividerRef} className="w-full h-[0.1px] scale-100 bg-white rounded-lg transition-all duration-700" style={{ opacity: actionOpacity, }} />
      <ToggleThemeMode
        className="ease-in-out transition-all duration-500"
        style={{
          position: "relative",
          top: `${top}px`,
          opacity: actionOpacity,
          transitionDelay: `${getDelay()}ms`,
        }} />
      <Button className="ease-in-out transition-all duration-500" type="mobile-menu-button" style={{
        position: "relative",
        top: `${top}px`,
        opacity: actionOpacity,
        transitionDelay: `${getDelay()}ms`,
      }}>
        Download CV
      </Button>
    </div>
  );
}

const Desktop = () => {
  const { activeMenu, setActiveMenu } = useContext(HeaderMenuContext)!;

  return (
    <div className="hidden lg:block">
      <ul className="flex gap-7 xl:gap-10 2xl:gap-11">
        {menu.map((item) => (
          <li key={item.name} className={`
            ${item.name == activeMenu ? "text-secondary dark:text-primary font-semibold" : "text-black dark:text-[#C1C1C1]"} font-medium 
            hover:font-semibold  hover:text-secondary dark:hover:text-primary 
            transition-all duration-300`}
          >
            <a className="cursor-pointer py-2" onClick={() => setActiveMenu(item.name)}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HeaderMenu;