import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from "../components/App";

document.addEventListener("DOMContentLoaded", () => {
  const root = ReactDOM.createRoot(document.body.appendChild(document.createElement("div")));
  root.render(
    <App />,
    
  );
});