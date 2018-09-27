import React from "react";
import "./styles.css";

const Skills = props => {
  const content = props.content.map((project, i) => {
    return (
      <div className="skill" key={i}>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <h3>{project.title}</h3>
          <img src={project.img} alt={project.alt} />
          <p>{project.desc}</p>
        </a>
      </div>
    );
  });
  return (
    <div>
        <h2>{props.title}</h2>
      <div className="skills">
        {content}
      </div>
    </div>
  );
};

export default Skills;
