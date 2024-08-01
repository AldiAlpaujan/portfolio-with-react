import { useContext, useEffect, useRef, useState } from "react";
import { BurgerMenuContext } from "../../../context/BurgerMenuContext";
import "./index.css";

interface BurgerMenuProps {
  className?: string;
}

const BurgerMenu = ({ className }: BurgerMenuProps) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [isAnimation, setIsAnimation] = useState(false);
  const { isOpen, setIsOpen } = useContext(BurgerMenuContext)!;

  function onClick() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    setIsAnimation(true);
    if (isOpen) {
      btnRef.current?.classList.add("burger-menu-active");
      setTimeout(() => {
        btnRef.current?.classList.add("rotate-menu-active");
      }, 400);
      setTimeout(() => {
        btnRef.current?.classList.add("burger-line-active-color");
      }, 300);
    } else {
      btnRef.current?.classList.remove("rotate-menu-active");
      setTimeout(() => {
        btnRef.current?.classList.remove("burger-menu-active");
      }, 400);
      setTimeout(() => {
        btnRef.current?.classList.remove("burger-line-active-color");
      }, 1500);
    }
    setTimeout(() => {
      setIsAnimation(false);
    }, 1000);
  }, [isOpen]);

  return (
    <button ref={btnRef} onClick={isAnimation ? undefined : onClick} className={`burger-menu ${className}`}>
      <span className="burger-line" />
      <span className="burger-line" />
      <span className="burger-line" />
    </button>
  );
};

export default BurgerMenu;