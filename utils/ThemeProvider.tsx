import { useState, useEffect, createContext, useRef, useContext, ReactNode } from "react";

const ThemeContext = createContext({} as any);

export const useTheme = () => {
  return useContext(ThemeContext);
};

type ProvideThemeProps = {
    children: ReactNode;
}

export function ProvideTheme({children}: ProvideThemeProps) {
    const firstRender = useRef(true);
    const [theme, setTheme] = useState<string>(`light`);
    
    useEffect(() => {
        const localStorageTheme = localStorage.getItem("theme");

        if (localStorageTheme) {
            setTheme(localStorageTheme);
        }
        // Set user prefered theme
        /* else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          setTheme("dark");
        } else {
          setTheme("light");
        } */
        else {
          setTheme("dark");
        }
    }, []);

    useEffect(() => {
        if (firstRender.current) {
          firstRender.current = false;
          return;
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const setLightTheme = () => {
        setTheme("light");
    }

    const setDarkTheme = () => {
        setTheme("dark");
    }
    
    return (
      <ThemeContext.Provider value={{ setLightTheme, setDarkTheme, theme }}>
        <div className={theme}>{children}</div>
      </ThemeContext.Provider>
    );
}