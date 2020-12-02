import React from "react";
import ProjectCard from './ProjectCard';
import projects from '../../assets/Data/Projects';

function Portfolio() {

  return (
    <div class="container-sm">
      <div class="row" style={{padding: "50px"}}>
            <h1>Web Development Portfolio</h1>
      </div>
      <div class='row'>
        <ProjectCard projects={projects} />
      </div>
    </div>
  );
}

export default Portfolio;
