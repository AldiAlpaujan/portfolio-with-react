import { menu } from "./data";

interface HeaderMenuProps {
  type: "mobile" | "desktop",
}

const HeaderMenu = ({ type }: HeaderMenuProps) => {
  return type === "mobile" ? <Mobile /> : <Desktop />;
}

const Mobile = () => {
  return (
    <div>
      <ul className="flex flex-col gap-8">
        {menu.map((item) => (
          <li key={item.name} className="text-white text-lg font-medium opacity-70 active:opacity-100">
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

const Desktop = () => {
  return (
    <div className="hidden lg:block">
      <ul className="flex gap-7 xl:gap-10 2xl:gap-11">
        {menu.map((item) => (
          <li key={item.name} className="
          cursor-pointer text-black font-medium
          dark:text-[#C1C1C1] 
          hover:font-semibold hover:text-primary dark:hover:text-primary 
          transition-all duration-300">
            <a >{item.name} </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HeaderMenu;