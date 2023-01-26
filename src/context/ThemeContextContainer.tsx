import { useState } from "react";
import { ThemeGetterContext, ThemeSetterContext, ThemeContextType } from "./themeContext";


export default function ThemeContextContainer({ children }: any) {
  const fetchThemeFromLS = String(localStorage.getItem("theme"));
  const [theme, setTheme] = useState<ThemeContextType>(fetchThemeFromLS as ThemeContextType);

  const themeSetterCtxValue =
    (theme: ThemeContextType) => {
      setTheme(theme)
      localStorage.setItem("theme", theme as string)
    }

  return (
    <ThemeGetterContext.Provider value={theme}>
      <ThemeSetterContext.Provider value={themeSetterCtxValue}>
        {children}
      </ThemeSetterContext.Provider>
    </ThemeGetterContext.Provider>
  )
}