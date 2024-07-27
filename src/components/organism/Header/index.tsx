import HeaderLogo from "../../atom/HeaderLogo";
import HeaderAction from "../../molecule/HeaderAction";
import HeaderMenu from "../../molecule/HeaderMenu";

const Header = () => {
  return (
    <nav className="bg-transparent w-full fixed z-10">
      <div className="container h-[70px] md:h-[80px] xl:h-[92px] flex justify-between items-center">
        <HeaderLogo />
        <HeaderMenu type="desktop" />
        <HeaderAction />
      </div>
    </nav>
  );
}

export default Header;