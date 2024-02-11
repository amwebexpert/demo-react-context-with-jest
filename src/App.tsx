import { FC, useContext } from "react";

import "./App.css";
import { ThemeContext } from "./app-context/theme";
import Home from "./screens/home/Home";

const App: FC = () => {
  const { theme } = useContext(ThemeContext);
  const { background, color } = theme;

  return (
    <div className="app-layout" style={{ background }}>
      <h1 style={{ background, color }}>Welcome to this Webapp Demo</h1>

      <Home />
    </div>
  );
};

export default App;
