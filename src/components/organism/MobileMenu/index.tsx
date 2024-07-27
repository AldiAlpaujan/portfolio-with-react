import { useContext, useEffect, useRef } from "react";
import { BurgerMenuContext } from "../../../context/BurgerMenuContext";
import HeaderMenu from "../../molecule/HeaderMenu";
import "./index.css";

const MobileMenu = () => {
  return (
    <>
      <Overlay />
      <Menu />
    </>
  );
};

const Menu = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const { isOpen } = useContext(BurgerMenuContext)!;

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        divRef.current?.classList.remove("hidden");
      }, 500);
    } else {
      divRef.current?.classList.add("hidden");
    }
  }, [isOpen]);

  return (
    <div ref={divRef} className={`hidden fixed top-0 w-full h-full bg-transparent px-5 pt-[91px] md:pt-[101px]`}>
      <HeaderMenu type="mobile" />
    </div>
  );
};

const Overlay = () => {
  const { isOpen } = useContext(BurgerMenuContext)!;
  return (
    <>
      <div
        className={`overlay bg-opacity-50 ${isOpen ? "bottom-0" : "top-0"}`}
        style={{
          height: isOpen ? "100%" : "0",
        }}
      />
      <div
        className={`overlay bg-opacity-50 delay-200 ${isOpen ? "bottom-0" : "top-0"}`}
        style={{
          height: isOpen ? "100%" : "0",
        }}
      />
    </>
  );
}

export default MobileMenu;