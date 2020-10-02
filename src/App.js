import React, { useEffect } from "react";
import Name from "./Name";
import Description from "./Description";
import Links from "./Links";
import "../style.css";
import ReactGA from "react-ga";
const App = () => {
  useEffect(() => {
    ReactGA.event({
      category: "Site Loads",
      action: "Site Loaded"
    });
    return () => {
      ReactGA.event({
        category: "Site Unloaded",
        action: "Site Unloaded"
      });
    };
  }, []);
  return (
    <React.Fragment>
      <Name />
      <Description />
      <Links />
    </React.Fragment>
  );
};
export default App;
