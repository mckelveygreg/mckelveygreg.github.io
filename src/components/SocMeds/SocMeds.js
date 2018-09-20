import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faFacebook,
  faFreeCodeCamp
} from "@fortawesome/free-brands-svg-icons";

import "./style.css";

export default () => {
  return (
    <div className="socMeds">
      <a href="https://github.com/mckelveygreg" target="_blank">
        <FontAwesomeIcon icon={faGithub} size="3x" />
      </a>
      <a href="https://www.linkedin.com/in/mckelveygreg/" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://www.freecodecamp.org/mckelveygreg" target="_blank">
        <FontAwesomeIcon icon={faFreeCodeCamp} />
      </a>
      <a href="https://twitter.com/Whyisbecause" target="_blank">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="https://www.facebook.com/whyisbecause" target="_blank">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
    </div>
  );
};
