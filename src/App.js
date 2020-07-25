import React from "react";
import Name from "./Name";
import Description from "./Description";
import Links from "./Links";
import "../style.css";
const App = () => {
  return (
    <React.Fragment>
      <Name />
      <Description />
      <Links />
    </React.Fragment>
  );
};
export default App;
