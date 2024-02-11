import { FC, useContext } from "react";

import "./App.css";
import { ThemeContext } from "./app-context/theme";
import Home from "./screens/home/Home";
import { CounterContext } from "./app-context/counter";

const App: FC = () => {
  const { theme } = useContext(ThemeContext);
  const { background, color } = theme;

  const { counter } = useContext(CounterContext);


  return (
    <div className="app-layout" style={{ background }}>
      <h1 style={{ background, color }}>Welcome to this Webapp Demo</h1>
      <h2 style={{ background, color }}>Counter: {counter}</h2>

      <Home />
    </div>
  );
};

export default App;
