import { useContext } from "react"
import { ThemeGetterContext, ThemeSetterContext } from "../context"

export const useTheme = () => {
  const setTheme = useContext(ThemeSetterContext);
  const theme = useContext(ThemeGetterContext);

  return {
    setTheme,
    theme
  }
}