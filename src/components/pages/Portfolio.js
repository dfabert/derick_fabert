import React from "react";
import ProjectCard from './ProjectCard';
import projects from '../../assets/Data/Projects';

function Portfolio() {

  return (
    <div className="container-sm">
      <div className="row" style={{padding: "50px"}}>
            <h1>Web Development Portfolio</h1>
      </div>
        <ProjectCard projects={projects} />
    </div>
  );
}

export default Portfolio;
