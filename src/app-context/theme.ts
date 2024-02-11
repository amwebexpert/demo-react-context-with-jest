import { CSSProperties, createContext } from "react";

export type ThemeName = "light" | "dark";

export interface Theme {
  color: string;
  background: string;
}

export const THEMES: Record<ThemeName, CSSProperties> = {
  light: {
    color: "#000000",
    background: "#eeeeee",
  },
  dark: {
    color: "#ffffff",
    background: "#222222",
  },
};

export type SetThemeType = (theme: ThemeName) => void;
export type ToggleThemeType = () => void;
export type ThemeContextType = {
  themeName: ThemeName;
  theme: CSSProperties;
  toggle: ToggleThemeType;
  setThemeName?: SetThemeType;
};

export const ThemeContext = createContext<ThemeContextType>({
  themeName: "dark",
  theme: THEMES.dark,
  toggle: () => {},
  setThemeName: () => {},
});
