import BurgerMenu from "../../atom/BurgerMenu";
import Button from "../../atom/Button";
import HeaderLogo from "../../atom/HeaderLogo";
import { IconLight } from "../../atom/icons/icon-light";
import { menu } from "./data";

const Header = () => {
  return (
    <nav className="bg-transparent w-full fixed z-10">
      <div className="container py-4 flex justify-between items-center">
        <HeaderLogo />
        <Menu />
        <Action />
      </div>
    </nav>
  );
}


const Menu = () => {
  return (
    <div className="hidden lg:block">
      <ul className="flex gap-7 xl:gap-10 2xl:gap-11">
        {menu.map((item) => (
          <li key={item.name} className="cursor-pointer hover:text-primary transition-all duration-300">
            <a >{item.name} </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

const Action = () => {
  return (
    <>
      <BurgerMenu className="lg:hidden" />
      <div className="hidden lg:flex gap-7 items-center">
        <a className="cursor-pointer hover:rotate-90 transition-all duration-300">
          <IconLight />
        </a>
        <Button >Download CV</Button>
      </div>
    </>
  );
}

export default Header;