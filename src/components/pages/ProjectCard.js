import React from 'react';

function ProjectCard(props) {
    return (
      <div class="container-sm">
          {props.projects.map(item => (
            <div>{item.name}</div>
          ))}
      </div>
    )
  }
  
  export default ProjectCard;