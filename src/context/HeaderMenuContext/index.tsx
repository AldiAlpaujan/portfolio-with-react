import { createContext, useState } from "react";

interface ProviderValue {
  activeMenu: string;
  setActiveMenu: (value: string) => void;
}

const HeaderMenuContext = createContext<ProviderValue | null>(null);
const HeaderMenuContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeMenu, setActiveMenu] = useState<string>("Home");

  return (
    <HeaderMenuContext.Provider value={{ activeMenu, setActiveMenu }}>
      {children}
    </HeaderMenuContext.Provider>
  );
};

export { HeaderMenuContext };
export default HeaderMenuContextProvider;
