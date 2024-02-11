import {
  createContext,
  useContext,
  FC,
  useState,
  PropsWithChildren,
  useCallback,
  useMemo,
  CSSProperties,
} from "react";

import "./App.css";

interface Theme {
  color: string;
  background: string;
}

type AvailableThemes = "light" | "dark";

const themes: Record<AvailableThemes, CSSProperties> = {
  light: {
    color: "#000000",
    background: "#eeeeee",
  },
  dark: {
    color: "#ffffff",
    background: "#222222",
  },
};

const ThemeContext = createContext<{
  theme: CSSProperties;
  toggle: () => void;
  setTheme?: (t: AvailableThemes) => void;
}>({
  theme: themes.dark,
  toggle: () => {},
});

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<AvailableThemes>("dark");

  const toggle = useCallback<() => void>(() => {
    setCurrentTheme(currentTheme === "dark" ? "light" : "dark");
  }, [currentTheme]);

  const setTheme = useCallback<(theme: AvailableThemes) => void>((theme) => {
    setCurrentTheme(theme);
  }, []);

  const memoizedTheme = useMemo<CSSProperties>(() => {
    return themes[currentTheme];
  }, [currentTheme]);

  return (
    <ThemeContext.Provider
      value={{
        toggle,
        setTheme,
        theme: memoizedTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

const Hooks: FC = () => {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <div className="app-layout">
      <div className="app-title">React Context test</div>

      <button
        onClick={toggle}
        className="app-button"
        style={{ background: theme.background, color: theme.color }}
      >
        My beautiful button...
      </button>
    </div>
  );
};

const App: FC = () => (
  <ThemeProvider>
    <Hooks />
  </ThemeProvider>
);

export default App;
