import React from "react";
import ProjectCard from './ProjectCard';
import projects from '../../assets/Data/Projects';

function Portfolio() {
  let techOptions=[];
  for(let i = 0; i < projects.length; i++){
    for(let j = 0; j < projects[i].technologies.length; j++){
      if(!techOptions.includes(projects[i].technologies[j])){
        techOptions.push(projects[i].technologies[j])
      }
    }
  }
  techOptions.sort();
 

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
