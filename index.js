import React from "react";
import ReactDOM from "react-dom";
import App from "./src/App";
import ReactGA from "react-ga";
import { config } from "dotenv";
config();
ReactGA.initialize("UA-173521458-1");
// console.log(process.env.TRACKING_ID);
ReactDOM.render(<App />, document.getElementById("root"));
