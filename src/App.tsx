import { FC, useContext } from "react";

import "./App.css";
import { ThemeContext } from "./context/theme";
import Home from "./screens/home/Home";
import Header from "./components/Header";

const App: FC = () => {
  const { theme } = useContext(ThemeContext);
  const { background } = theme;

  return (
    <div className="app-layout" style={{ background }}>
      <Header />

      <Home userName="John Smith" />
    </div>
  );
};

export default App;
