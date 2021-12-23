import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Styling from "./Styling/Styling";

ReactDOM.render(
  <React.StrictMode>
    <Styling>
      <App />
    </Styling>
  </React.StrictMode>,
  document.getElementById("root")
);
