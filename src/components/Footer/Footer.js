import React from "react";
import SocMeds from "../SocMeds/SocMeds";
import "./styles.css";

const Footer = () => {
  var sourceURL = "https://github.com/mckelveygreg" + window.location.pathname;
  // var sourceA = document.querySelector('#sourceURL');
  // sourceA.setAttribute('href', sourceURL);
  var year = new Date().getFullYear();
  return (
    <div className="Footer">
      <div id="copyright">
        <p>
          Created by Greg McKelvey &copy;
          {year}
        </p>
      </div>

      <SocMeds />

      <div id="viewSource">
        <p>
          View{" "}
          <a id="sourceURL" href={sourceURL}>
            Source Code
          </a>{" "}
          on GitHub!
        </p>
      </div>
    </div>
  );
};

export default Footer;
