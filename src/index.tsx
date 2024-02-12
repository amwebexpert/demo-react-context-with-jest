import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";

import { ThemeProvider } from "./context/theme-provider.tsx";
import "./index.css";
import { CounterProvider } from "./context/counter-provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <CounterProvider>
        <App />
      </CounterProvider>
    </ThemeProvider>
  </React.StrictMode>
);
