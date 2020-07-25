import React from "react";
import ReactDOM from "react-dom";
import App from "./src/App";
import ReactGA from "react-ga";
import { config } from "dotenv";
config();
ReactGA.initialize(process.env.TRACKING_ID);
// console.log(process.env.TRACKING_ID);
ReactDOM.render(<App />, document.getElementById("root"));
