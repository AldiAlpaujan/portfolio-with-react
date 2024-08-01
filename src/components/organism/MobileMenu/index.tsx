import { useContext, useEffect, useRef, useState } from "react";
import { BurgerMenuContext } from "../../../context/BurgerMenuContext";
import HeaderMenu from "../../molecule/HeaderMenu";
import "./index.css";

const MobileMenu = () => {
  return (
    <div className="lg:hidden">
      <Overlay />
      <Menu />
    </div>
  );
};

const Menu = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const { isOpen } = useContext(BurgerMenuContext)!;

  useEffect(() => {
    if (isOpen) {
      divRef.current?.classList.remove("hidden");
      setTimeout(() => {
        headerRef.current?.classList.remove("hidden");
      }, 800);
    } else {
      headerRef.current?.classList.add("hidden");
      setTimeout(() => {
        divRef.current?.classList.add("hidden");
      }, 1000);
    }
  }, [isOpen]);

  return (
    <div ref={divRef} className="hidden overflow-auto w-full h-full fixed top-0">
      <div ref={headerRef} className="hidden fixed h-[70px] md:h-[80px] w-full bg-primary z-10" />
      <div className={`container h-full pt-[70px] md:pt-[80px]`}>
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
      }, 1000);
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