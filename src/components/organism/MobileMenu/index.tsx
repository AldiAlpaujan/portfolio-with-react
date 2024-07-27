import { useContext } from "react";
import { BurgerMenuContext } from "../../../context/BurgerMenuContext";
import "./index.css";

const MobileMenu = () => {
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
};

export default MobileMenu;