import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// CSS
import "./style/root.css";
import "./style/sidebar-profile.css";
import "./style/navigation.css";
import "./style/landing-page.css";
// import "./style/feed.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
