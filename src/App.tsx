import { FC } from "react";

import "./App.css";
import { ThemeProvider } from "./app-context/theme-provider";
import Home from "./screens/home/Home";

const App: FC = () => (
  <ThemeProvider>
    <div className="app-layout">
      <Home />
    </div>
  </ThemeProvider>
);

export default App;
