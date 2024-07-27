import { useContext, useEffect, useRef } from "react";
import { BurgerMenuContext } from "../../../context/BurgerMenuContext";
import "./index.css";

const HeaderLogo = () => {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const { isOpen } = useContext(BurgerMenuContext)!;

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
      }, 400);
    }
  }, [isOpen]);

  return (
    <div className="flex flex-col items-center">
      <h1
        ref={h1Ref}
        className="text-lg md:text-xl text-center font-bold text-gradient transition-all duration-300"
      >
        {"<ALDI ALPAUJAN />"}
      </h1>
    </div>
  );
};

export default HeaderLogo;