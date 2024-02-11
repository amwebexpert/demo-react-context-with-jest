import { CSSProperties, createContext } from "react";

export type AvailableThemes = "light" | "dark";

export interface Theme {
  color: string;
  background: string;
}

export const THEMES: Record<AvailableThemes, CSSProperties> = {
  light: {
    color: "#000000",
    background: "#eeeeee",
  },
  dark: {
    color: "#ffffff",
    background: "#222222",
  },
};

export type SetThemeType = (theme: AvailableThemes) => void;
export type ToggleThemeType = () => void;
export type ThemeContextType = {
  theme: CSSProperties;
  toggle: ToggleThemeType;
  setCurrentTheme?: SetThemeType;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: THEMES.dark,
  toggle: () => {},
});
