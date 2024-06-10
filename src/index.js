import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./styles/styles.css";
import "./styles/styles2.css";

if (module.hot) {
  module.hot.accept();
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
