import React from 'react';
import {createRoot} from 'react-dom/client';
import App from "./App.js";
document.querySelector("body").style.margin=0;
const el = document.getElementById("root");
const root =createRoot(el);
root.render(<App />);

