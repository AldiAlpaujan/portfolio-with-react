/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useContext, useEffect } from "react";
import { HeaderMenuContext } from "../../../context/HeaderMenuContext";

interface PageWrapperProps {
  id: string;
  children: ReactNode;
}

const PageWrapper = ({ id, children }: PageWrapperProps) => {
  const { setActiveMenu } = useContext(HeaderMenuContext)!;
  const handleScroll = () => {
    const scrollTop =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
    const section = document.getElementById(id)!;
    const startScroll = section.offsetTop;
    // if (scrollTop > startScroll) {
    //   setActiveMenu(id);
    // }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id={id} className="container w-full h-[calc(100vh-100px)] flex items-center justify-center">
      {children}
    </div>
  );
};

export default PageWrapper;