import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ProjectCard(props) {
    return (
      <div class = 'row'>
          {props.projects.map(project => (
            <Card style={{ width: '19rem' }}>
            <Card.Img variant="top" src={project.image} />
            <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>
                    {project.description}
                </Card.Text>
                <Button variant="primary" href = {project.link}>Deployed App</Button>
                <Button variant="primary" href = {project.repo}>Github Repo</Button>
            </Card.Body>
            </Card>
            ))}
      </div>
    )
  }
  
  export default ProjectCard;
  
