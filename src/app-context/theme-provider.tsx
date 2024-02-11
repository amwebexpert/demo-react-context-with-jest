import { FC, PropsWithChildren, useCallback, useState } from "react";
import {
  AvailableThemes,
  THEMES,
  ThemeContext,
  ToggleThemeType,
} from "./theme";

type Props = PropsWithChildren & {
  initialTheme?: AvailableThemes;
};

export const ThemeProvider: FC<Props> = ({ initialTheme = "dark", children }) => {
  const [currentTheme, setCurrentTheme] = useState<AvailableThemes>(initialTheme);

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
