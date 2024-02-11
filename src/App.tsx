import { FC, useContext } from "react";

import "./App.css";
import { ThemeContext } from "./app-context/theme";
import Home from "./screens/home/Home";

const App: FC = () => {
  const { theme } = useContext(ThemeContext);
  const { background } = theme;

  return (
    <div className="app-layout" style={{ background }}>
      <Home />
    </div>
  );
};

export default App;
