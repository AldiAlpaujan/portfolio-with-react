import { useContext, useEffect, useRef, useState } from "react";
import { BurgerMenuContext } from "../../../context/BurgerMenuContext";
import { menu } from "./data";
import Button from "../../atom/Button";

interface HeaderMenuProps {
  type: "mobile" | "desktop",
}

const HeaderMenu = ({ type }: HeaderMenuProps) => {
  return type === "mobile" ? <Mobile /> : <Desktop />;
}

const Mobile = () => {
  const dividerRef = useRef<HTMLDivElement>(null);
  const { isOpen } = useContext(BurgerMenuContext)!;
  const [opacity, setOpacity] = useState(0);
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
        setOpacity(.7);
        setTop(0);
        dividerRef.current?.classList.add("scale-100");
        setTimeout(() => {
          dividerRef.current?.classList.remove("scale-0");
        }, 500);
      }, 300);
    } else {
      dividerRef.current?.classList.add("scale-0");
      dividerRef.current?.classList.remove("scale-100");
      setOpacity(0);
      setTop(-15);
      setTimeout(() => {
        setTop(15);
      }, 1000);
    }
  }, [isOpen]);

  return (
    <div className="mx-2 flex flex-col gap-8">
      <ul className="flex flex-col gap-8">
        {menu.map((item) => (
          <li key={item.name}
            className="text-white text-lg font-medium active:opacity-100 ease-in-out transition-all duration-500"
            style={{
              position: "relative",
              top: `${top}px`,
              opacity: opacity,
              transitionDelay: `${getDelay()}ms`,
            }}
          >
            {item.name}
          </li>
        ))}
      </ul>
      <div ref={dividerRef} className="w-full h-[0.1px] scale-100 bg-white rounded-lg transition-all duration-500" />
      <Button className="ease-in-out transition-all duration-500" type="mobile-menu-button" style={{
        position: "relative",
        top: `${top}px`,
        opacity: opacity,
        transitionDelay: `${getDelay()}ms`,
      }}>
        Download CV
      </Button>
    </div>
  );
}

const Desktop = () => {
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

export default HeaderMenu;