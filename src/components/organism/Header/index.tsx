import BurgerMenu from "../../atom/BurgerMenu";
import HeaderLogo from "../../atom/HeaderLogo";
import { menu } from "./data";

const Header = () => {
  return (
    <nav className="bg-transparent w-full fixed z-10">
      <div className="container py-4 flex justify-between items-center">
        <HeaderLogo />
        {/* MENU */}
        {/* <Menu /> */}
        {/* ACTION CONTACT ME & DARK & LIGHT MODE */}
        <Action />
      </div>
    </nav>
  );
}


const Menu = () => {
  return (
    <div>
      <ul className="flex gap-4">
        {menu.map((item) => (
          <li key={item.name}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

const Action = () => {
  return (
    <>
      <BurgerMenu className="md:hidden" />
      <div className="hidden md:block">
        <Menu />
      </div>
    </>
  );
}

export default Header;