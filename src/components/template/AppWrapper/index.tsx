import BurgerMenuContextProvider from "../../../context/BurgerMenuContext";
import ThemeContextProvider from "../../../context/ThemeContext";
import Header from "../../organism/Header";
import MobileMenu from "../../organism/MobileMenu";

interface AppWrapperProps {
  children: React.ReactNode
}

const AppWrapper = (props: AppWrapperProps) => {
  const { children } = props;
  return (
    <>
      <ThemeContextProvider>
        <BurgerMenuContextProvider>
          <Header />
          <main className="pt-[71px] md:pt-[81px] xl:pt-[93px]">
            {children}
          </main>
          <MobileMenu />
        </BurgerMenuContextProvider>
      </ThemeContextProvider>
    </>
  )
}

export default AppWrapper;