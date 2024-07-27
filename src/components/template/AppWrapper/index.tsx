import BurgerMenuContextProvider from "../../../context/BurgerMenuContext";
import Header from "../../organism/Header";
import MobileMenu from "../../organism/MobileMenu";

interface AppWrapperProps {
  children: React.ReactNode
}

const AppWrapper = (props: AppWrapperProps) => {
  const { children } = props;
  return (
    <>
      <BurgerMenuContextProvider>
        <Header />
        <main className="pt-20 md:pt-[80px] lg:pt-[92px]">
          {children}
        </main>
        <MobileMenu />
      </BurgerMenuContextProvider>
    </>
  )
}

export default AppWrapper;