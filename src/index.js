import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./styles/styles.css";

if (module.hot) {
  module.hot.accept();
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
