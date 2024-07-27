import { createContext, useEffect, useState } from "react";


interface ProviderValue {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const BurgerMenuContext = createContext<ProviderValue | null>(null);
const BurgerMenuContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1024) {
        setIsOpen(false);
      }
    });
  }, []);

  return (
    <BurgerMenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </BurgerMenuContext.Provider>
  );
};

export { BurgerMenuContext }
export default BurgerMenuContextProvider;