import { FC, useContext } from "react";

import { ThemeContext } from "../../app-context/theme";
import "./Home.css";
import { CounterContext } from "../../app-context/counter";

type Props = {
  userName?: string;
};

const Home: FC<Props> = ({ userName }) => {
  const { theme, toggle } = useContext(ThemeContext);
  const { background, color } = theme;

  const { counter, increment } = useContext(CounterContext);

  const hasUserName = !!userName;

  return (
    <>
      {hasUserName && <h3 style={{ color }}>Good morning {userName}!</h3>}

      <div className="home-title">Theme infos:</div>
      <ul>
        <li style={{ color }}>color: {color}</li>
        <li style={{ color }}>background: {background}</li>
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
