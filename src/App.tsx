import { FC, useContext } from "react";

import "./App.css";
import { ThemeContext } from "./context/theme";
import { useCounterContext } from "./context/use-counter-context";
import Home from "./screens/home/Home";

const App: FC = () => {
  const { counter } = useCounterContext();

  const { theme, themeName } = useContext(ThemeContext);
  const { background, color } = theme;

  return (
    <div className="app-layout" style={{ background }}>
      <h1 style={{ background, color }}>Welcome to this Webapp Demo</h1>
      <h2 style={{ background, color }}>Theme: {themeName}</h2>
      <h2 style={{ background, color }}>Counter: {counter}</h2>

      <Home userName="John Smith" />
    </div>
  );
};

export default App;
