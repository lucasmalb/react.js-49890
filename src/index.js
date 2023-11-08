import React from "react";


import ReactDOM from "react-dom/client";

import App from "./App";


import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
const el = document.getElementById("root");


const root = ReactDOM.createRoot(el);

root.render(<App/>)