import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "./globals.css";
import GlobalContext from "./context/index.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalContext>
      <App />
    </GlobalContext>
  </React.StrictMode>,
);
