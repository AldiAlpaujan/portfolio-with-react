import { useContext, useEffect, useRef } from "react";
import { BurgerMenuContext } from "../../../context/BurgerMenuContext";

const HeaderLogo = () => {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const { isOpen } = useContext(BurgerMenuContext)!;

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        h1Ref.current?.classList.add("text-white");
        h2Ref.current?.classList.add("text-white");
        h1Ref.current?.classList.remove("text-light-subtitle");
        h2Ref.current?.classList.remove("text-light-subtitle");
      }, 400);
    } else {
      setTimeout(() => {
        h1Ref.current?.classList.remove("text-white");
        h2Ref.current?.classList.remove("text-white");
        h1Ref.current?.classList.add("text-light-subtitle");
        h2Ref.current?.classList.add("text-light-subtitle");
      }, 400);
    }
  }, [isOpen]);

  return (
    <div className="flex flex-col items-center">
      <h1
        ref={h1Ref}
        className="text-lg md:text-xl lg:text-2xl text-center font-bold text-light-subtitle transition-all duration-300"
      >
        ALDI ALPAUJAN
      </h1>
      <h2
        ref={h2Ref}
        className="text-xs md:text-sm lg:text-base text-center text-light-subtitle transition-all duration-300"
      >
        Software Developer
      </h2>
    </div>
  );
};

export default HeaderLogo;