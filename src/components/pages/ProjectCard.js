import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function ProjectCard(props) {
    return (
    <div>
      <Row>
          {props.projects.map(project => (
            <Col className="d-flex justify-content-center">
              <Card style={{ width: '19rem', margin: '5px' }} >
              <Card.Img variant="top" src={project.image} />
              <Card.Body>
                  <Card.Title>{project.name}</Card.Title>
                  <Card.Text>
                      {project.description}
                  </Card.Text>
                  <Button variant="primary" href = {project.link} target = "_blank">Deployed App</Button>
                  <Button variant="primary" href = {project.repo} target = "_blank">Github Repo</Button>
              </Card.Body>
              </Card>
            </Col>
            ))}
      </Row>
    </div>
    )
  }
  
  export default ProjectCard;
  
