import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";



const rootEelement = document.querySelector('#root');

const root = createRoot(rootEelement);

root.render(
    <App />
)