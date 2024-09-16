import { createContext, useEffect, useState } from "react";

interface ProviderValue {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}

const ThemeContext = createContext<ProviderValue | null>(null);
const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, _setTheme] = useState<"light" | "dark">("light");

  const setTheme = (value: "light" | "dark") => {
    _setTheme(value);
    localStorage.setItem("theme", value);
  }

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      _setTheme(theme as "light" | "dark");
    } else {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark");
        localStorage.setItem("theme", "dark");
      } else {
        setTheme("light");
        localStorage.setItem("theme", "light");
      }
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext };
export default ThemeContextProvider;