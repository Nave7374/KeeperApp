import React from 'react';
import ReactDOM from "react-dom";
import App from "./components/App.jsx";

const root = document.getElementById('root');

const body = document.getElementById('body');

ReactDOM.render(
    <App body = {body} />
    ,root
);
