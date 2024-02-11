import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";

import { ThemeProvider } from "./app-context/theme-provider.tsx";
import "./index.css";
import { CounterProvider } from "./app-context/counter-provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <CounterProvider>
        <App />
      </CounterProvider>
    </ThemeProvider>
  </React.StrictMode>
);
