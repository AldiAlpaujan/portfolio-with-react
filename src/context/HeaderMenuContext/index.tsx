/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from "react";

interface ProviderValue {
  activeMenu: string;
  isNavigating: boolean;
  setActiveMenu: (value: string) => void;
  setActiveMenuWithOutNavigating: (value: string) => void;
  setIsNavigating: (value: boolean) => void;
}

const HeaderMenuContext = createContext<ProviderValue | null>(null);
const HeaderMenuContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeMenu, _setActiveMenu] = useState<string>("Home");
  const [isNavigating, setIsNavigating] = useState<boolean>(false);

  const setActiveMenu = (value: string) => {
    _setActiveMenu(value);
    setIsNavigating(true);
    document.getElementById(value)?.scrollIntoView({ behavior: "smooth" });
  };

  const setActiveMenuWithOutNavigating = (value: string) => {
    _setActiveMenu(value);
  };

  const handleScroll = () => {
    const section = document.getElementById(activeMenu);
    if (section) {
      const rect = section.getBoundingClientRect();
      if (rect.top == 0) {
        setIsNavigating(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeMenu]);

  return (
    <HeaderMenuContext.Provider value={{ activeMenu, setActiveMenu, setActiveMenuWithOutNavigating, isNavigating, setIsNavigating }}>
      {children}
    </HeaderMenuContext.Provider>
  );
};

export { HeaderMenuContext };
export default HeaderMenuContextProvider;
