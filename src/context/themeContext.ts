import { createContext } from "react";
export type ThemeContextType = "light" | "dark";

export const ThemeGetterContext = createContext<ThemeContextType>("light");

export const ThemeSetterContext = createContext((theme: ThemeContextType): void => { })