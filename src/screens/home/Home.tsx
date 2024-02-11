import { FC, useContext } from "react";

import { ThemeContext } from "../../app-context/theme";
import "./Home.css";

const Home: FC = () => {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <>
      <div className="home-title">React Context test</div>

      <button
        onClick={toggle}
        className="home-button"
        style={{ background: theme.background, color: theme.color }}
      >
        My beautiful Home button
      </button>
    </>
  );
};

export default Home;
