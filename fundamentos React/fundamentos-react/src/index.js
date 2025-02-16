import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import App from "./components/App";


const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
    <>
        <App />
    </>,
);
