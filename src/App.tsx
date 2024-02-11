import { FC, useContext } from "react";

import "./App.css";
import { ThemeContext } from "./app-context/theme";
import { ThemeProvider } from "./app-context/theme-provider";

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
