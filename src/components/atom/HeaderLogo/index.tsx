/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useRef } from "react";
import { BurgerMenuContext } from "../../../context/BurgerMenuContext";
import "./index.css";

const HeaderLogo = () => {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const { isOpen } = useContext(BurgerMenuContext)!;
  const logo = "<ALDI ALPAUJAN />";

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        h1Ref.current?.classList.add("text-white");
        h1Ref.current?.classList.remove("text-gradient");
      }, 400);
    } else {
      setTimeout(() => {
        h1Ref.current?.classList.remove("text-white");
        h1Ref.current?.classList.add("text-gradient");
      }, 1500);
    }
  }, [isOpen]);

  return (
    <div className="flex flex-col items-center">
      <h1 ref={h1Ref} className="lg:hidden logo transition-all duration-300">
        {logo}
      </h1>
      <h1 className="hidden lg:block logo transition-all duration-300">
        {logo}
      </h1>
    </div>
  );
};

export default HeaderLogo;