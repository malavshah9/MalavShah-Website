import React, { useCallback } from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";
const Links = () => {
  const recordEvents = useCallback(event => {
    const eventName = event.target.attributes[1].nodeValue;
    ReactGA.event({
      category: "Click",
      action: `${eventName} Clicked`
    });
  }, []);
  return (
    <div id="links">
      <a
        href="https://github.com/malavshah9"
        title="Github Profile"
        onClick={recordEvents}
        target="_blank"
      >
        <img
          src={require("../assets/images/GitHub-Mark-64px.png")}
          alt="Github Logo"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/malav-shah-34945318b/"
        title="Linkedin Profile"
        onClick={recordEvents}
        target="_blank"
      >
        <img
          src={require("../assets/images/linkedin.png")}
          alt="Linkedin Logo"
        />
      </a>
      <a
        href="mailto: mdshah9574@gmail.com"
        title="Mail"
        onClick={recordEvents}
        target="_blank"
      >
        <img src={require("../assets/images/at.png")} alt="Email Logo" />
      </a>
    </div>
  );
};
export default Links;
