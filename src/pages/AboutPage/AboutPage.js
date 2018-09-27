import React from "react";
import styles from "./styles.css";
import Banner from "../../components/Banner/Banner";

const AboutPage = () => {
  return (
    <div>
      <Banner banner="My Story" />
      <section id="aboutPage">
        <div id="aboutText">
          <p>
            I've been interested in technology all of my life. From hacking
            together gaming networks in high school to teaching computers in
            high school, working with and learning about tech has always been
            close at hand.
          </p>
          <br />
          <p>
            I found {' '}
            <a
              href="https://freecodecamp.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              FreeCodeCamp
            </a>{" "}
            on {' '}
            <a
              href="https://www.freecodecamp.org/mckelveygreg"
              target="_blank"
              rel="noopener noreferrer"
            >
              January 1, 2018
            </a>{" "}
            and started coding in all of my free time.
          </p>
          <br />
          <p>
            I have decided to change careers from teaching high school to web
            development. I am on a mission to learn, improve, and fix all I can
            that surrounds me!
          </p>
          <br />
          <p>
            I live and wish to work in the Eugene, Oregon area, so if you
            happened to have stumbled by this, please feel free to reach out to
            me by any of the below social medias, or by email,
            mckelveygreg@gmail.com
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
