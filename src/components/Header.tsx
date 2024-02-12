import { FC, useContext } from "react";

import "./App.css";
import { ThemeContext } from "../context/theme";
import { useCounterContext } from "../context/use-counter-context";

const Header: FC = () => {
  const { counter } = useCounterContext();

  const { theme, themeName } = useContext(ThemeContext);
  const { background, color } = theme;

  return (
    <>
      <h1 style={{ background, color }}>Welcome to this Webapp Demo</h1>
      <h2 style={{ background, color }}>Theme: {themeName}</h2>
      <h2 style={{ background, color }}>Counter: {counter}</h2>
    </>
  );
};

export default Header;
