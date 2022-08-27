import React from "react";
import { ProjectCard, ProjectDetails, ProjectLinks } from "../styles/project";

const Card = ({ img, title, view, source }) => {
  return (
    <ProjectCard>
      <img
        width={245}
        height={220}
        src={require(`../assets/images/${img}.png`)}
        alt={title}
      />
      <h2>{title}</h2>
      <ProjectDetails>
        <ProjectLinks>
          <div className="btn">
            <a href={view}>View</a>
          </div>
          <div className="btn">
            <a href={source}>Source</a>
          </div>
        </ProjectLinks>
      </ProjectDetails>
    </ProjectCard>
  );
};

export default Card;
