import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// CSS
import "./style/root.css";
import "./style/sidebar-profile.css";
import "./style/navigation.css";
import "./style/landing-page.css";
import "./style/create-post.css";
import "./style/edit-profile.css";
import "./style/sidebar-profile-people.css";
import "./style/message.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
