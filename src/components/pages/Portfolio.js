import React from "react";
import ProjectCard from './ProjectCard';
import projects from '../../assets/Data/Projects';
import Dropdown from './Dropdown';

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
    <div className='container-sm'>
      <div style={{padding: '50px', flexDirection: 'row', justifyContent: 'space-between' }}>
            <h1>Web Development Portfolio</h1>
            {/* <Dropdown style={{ marginLeft: 'auto' }}  title ={'Filter By Technologies'} options={techOptions}/> */}
      </div>
        <ProjectCard projects={projects} />
    </div>
  );
}

export default Portfolio;
