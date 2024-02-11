import { FC, PropsWithChildren, useCallback, useState } from "react";
import {
  AvailableThemes,
  THEMES,
  ThemeContext,
  ToggleThemeType
} from "./theme";

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<AvailableThemes>("dark");

  const toggle = useCallback<ToggleThemeType>(
    () => setCurrentTheme(currentTheme === "dark" ? "light" : "dark"),
    [currentTheme]
  );

  const theme = THEMES[currentTheme];

  return (
    <ThemeContext.Provider value={{ theme, toggle, setCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
