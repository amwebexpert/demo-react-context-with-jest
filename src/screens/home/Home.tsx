import { FC, useContext } from "react";

import { ThemeContext } from "../../app-context/theme";
import "./Home.css";
import { CounterContext } from "../../app-context/counter";

const Home: FC = () => {
  const { theme, toggle } = useContext(ThemeContext);
  const { background, color } = theme;

  const { counter, increment } = useContext(CounterContext);

  return (
    <>
      <div className="home-title">React Context test</div>
      <ul>
        <li style={{ color }}>Color: {color}</li>
        <li style={{ color }}>Background: {background}</li>
      </ul>

      <button
        onClick={() => {
          toggle();
          increment();
        }}
        className="home-button"
        style={{ background, color }}
      >
        You clicked me {counter} times so far!
      </button>
    </>
  );
};

export default Home;
