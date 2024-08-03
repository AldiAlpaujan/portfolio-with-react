/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useContext, useEffect } from "react";
import { HeaderMenuContext } from "../../../context/HeaderMenuContext";

interface PageWrapperProps {
  id: string;
  className?: string;
  children: ReactNode;
}

const PageWrapper = ({ id, className, children }: PageWrapperProps) => {
  const { setActiveMenuWithOutNavigating, isNavigating } = useContext(HeaderMenuContext)!;

  const handleScroll = () => {
    if (isNavigating == false) {
      const scrollTop =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      const section = document.getElementById(id)!;
      const startScroll = section.offsetTop;
      if (scrollTop > startScroll) {
        setActiveMenuWithOutNavigating(id);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isNavigating]);

  return (
    <div id={id} className={`container w-full h-screen flex items-center justify-center ${className}`}>
      {children}
    </div>
  );
};

export default PageWrapper;