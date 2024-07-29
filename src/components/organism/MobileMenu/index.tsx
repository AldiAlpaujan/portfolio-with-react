import { useContext, useEffect, useRef, useState } from "react";
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
      divRef.current?.classList.remove("hidden");
    } else {
      setTimeout(() => {
        divRef.current?.classList.add("hidden");
      }, 800);
    }
  }, [isOpen]);

  return (
    <div ref={divRef} className="hidden w-full h-full fixed top-0">
      <div className={`container pt-[91px] md:pt-[101px]`}>
        <HeaderMenu type="mobile" />
      </div>
    </div>
  );
};

const Overlay = () => {
  const { isOpen } = useContext(BurgerMenuContext)!;
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowOverlay(true);
    } else {
      setTimeout(() => {
        setShowOverlay(false);
      }, 800);
    }
  }, [isOpen]);

  return (
    <>
      <div
        className={`overlay bg-opacity-50 ${!showOverlay && "delay-200"} ${showOverlay ? "bottom-0" : "top-0"}`}
        style={{
          height: showOverlay ? "100%" : "0",
        }}
      />
      <div
        className={`overlay ${showOverlay && "delay-200"} ${showOverlay ? "bottom-0" : "top-0"}`}
        style={{
          height: showOverlay ? "100%" : "0",
        }}
      />
    </>
  );
}

export default MobileMenu;