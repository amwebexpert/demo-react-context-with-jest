import { FC, PropsWithChildren, useCallback, useState } from "react";
import { THEMES, ThemeContext, ThemeName, ToggleThemeType } from "./theme";

type Props = PropsWithChildren & {
  initialTheme?: ThemeName;
};

export const ThemeProvider: FC<Props> = ({
  initialTheme = "dark",
  children,
}) => {
  const [themeName, setThemeName] = useState<ThemeName>(initialTheme);

  const toggle = useCallback<ToggleThemeType>(
    () => setThemeName(themeName === "dark" ? "light" : "dark"),
    [themeName]
  );

  const theme = THEMES[themeName];

  return (
    <ThemeContext.Provider value={{ themeName, theme, toggle, setThemeName }}>
      {children}
    </ThemeContext.Provider>
  );
};
