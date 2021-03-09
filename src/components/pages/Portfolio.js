import { React, useState } from 'react';
import ProjectCard from './ProjectCard';
import projects from '../../assets/Data/Projects';
import Dropdown from '../Dropdown';

function Portfolio(props) {
  const [filtered, setFiltered] = useState([]);

    let techOptions=[];
    for(let i = 0; i < projects.length; i++){
      projects[i].display = false;
      for(let j = 0; j < projects[i].technologies.length; j++){
        if(!techOptions.includes(projects[i].technologies[j])){
          techOptions.push(projects[i].technologies[j])
        }
      }
    }
    techOptions.sort();

  const filterProjects = (data) => {
    //Make Filter Array
    let selection = data; //Made blank since we're only doing one at a time for now
    console.log(selection);

    //Change Display Properties for those selected, push to array for display
    let tempArray = [];
    for(let i = 0; i < projects.length; i++){
      if(projects[i].technologies.includes(selection)){
        projects[i].display = true;
        console.log(projects[i]);
        tempArray.push(projects[i]);
      }
    }
    setFiltered(tempArray);
  }

  return (
      <div className='container-sm'>
        <div style={{padding: '50px', display: 'flex', justifyContent: 'space-between'}}>
              <h1>Web Development Portfolio</h1>
              <Dropdown header={'Filter By Technology'} options={techOptions} filterProjects={filterProjects}/>
        </div>
        <ProjectCard projects={filtered.length === 0 ? projects : filtered} />
      </div>
  );
}

export default Portfolio;
