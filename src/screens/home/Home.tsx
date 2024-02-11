import { FC, useContext } from "react";

import { ThemeContext } from "../../app-context/theme";
import "./Home.css";

const Home: FC = () => {
  const { theme, toggle } = useContext(ThemeContext);
  const { background, color } = theme;

  return (
    <>
      <div className="home-title">React Context test</div>
      <ul>
        <li style={{ color }}>Color: {color}</li>
        <li style={{ color }}>Background: {background}</li>
      </ul>


      <button
        onClick={toggle}
        className="home-button"
        style={{ background, color }}
      >
        My beautiful Home button
      </button>
    </>
  );
};

export default Home;
