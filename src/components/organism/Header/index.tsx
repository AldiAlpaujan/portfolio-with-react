import { useContext, useEffect, useRef, useState } from "react";
import { BurgerMenuContext } from "../../../context/BurgerMenuContext";
import HeaderLogo from "../../atom/HeaderLogo";
import HeaderAction from "../../molecule/HeaderAction";
import HeaderMenu from "../../molecule/HeaderMenu";
import "./index.css";

const Header = () => {
  const { isOpen } = useContext(BurgerMenuContext)!;
  const [hasNavBar, setHasNavBar] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const handleScroll = () => {
    const navBar = navRef.current! as HTMLElement;
    const offsetTop = navBar.offsetTop + 10;
    if (window.scrollY > offsetTop) {
      navBar.classList.add("navbar-fixed");
      setHasNavBar(true);
    } else {
      navBar.classList.remove("navbar-fixed");
      setHasNavBar(false);
    }
  }

  useEffect(() => {
    if (!isOpen && hasNavBar) {
      setTimeout(() => {
        navRef.current!.classList.add("navbar-fixed");
      }, 1400);
    } else {
      setTimeout(() => {
        navRef.current!.classList.remove("navbar-fixed");
      }, 600);
    }
  }, [isOpen, hasNavBar]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav ref={navRef} className="bg-transparent w-full fixed z-10">
      <div className="container h-[70px] md:h-[80px] xl:h-[92px] flex justify-between items-center">
        <HeaderLogo />
        <HeaderMenu type="desktop" />
        <HeaderAction />
      </div>
    </nav>
  );
}

export default Header;