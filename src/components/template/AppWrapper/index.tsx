import BurgerMenuContextProvider from "../../../context/BurgerMenuContext";
import HeaderMenuContextProvider from "../../../context/HeaderMenuContext";
import ThemeContextProvider from "../../../context/ThemeContext";
import Footer from "../../organism/Footer";
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
          <HeaderMenuContextProvider>
            <Header />
            {children}
            <Footer />
            <MobileMenu />
          </HeaderMenuContextProvider>
        </BurgerMenuContextProvider>
      </ThemeContextProvider>
    </>
  )
}

export default AppWrapper;