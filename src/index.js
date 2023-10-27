import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ThemeProvider from "./Context/ThemeProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App />
  // <ThemeProvider>
  // </ThemeProvider>
);
