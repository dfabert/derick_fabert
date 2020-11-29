import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ProjectCard(props) {
    return (
      <div>
          {props.projects.map(project => (
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Deployed App</Button>
                <Button variant="primary">Github Link</Button>
            </Card.Body>
            </Card>
            ))}
      </div>
    )
  }
  
  export default ProjectCard;
  
