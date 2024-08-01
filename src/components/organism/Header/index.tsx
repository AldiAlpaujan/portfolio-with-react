import { useRef } from "react";
import HeaderLogo from "../../atom/HeaderLogo";
import HeaderAction from "../../molecule/HeaderAction";
import HeaderMenu from "../../molecule/HeaderMenu";
import "./index.css";

const Header = () => {
  const navRef = useRef<HTMLElement>(null);

  window.onscroll = () => {
    const navBar = navRef.current! as HTMLElement;
    const offsetTop = navBar.offsetTop;
    if (window.scrollY > offsetTop) {
      navBar.classList.add("navbar-fixed");
    } else {
      navBar.classList.remove("navbar-fixed");
    }
  }

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