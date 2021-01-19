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
              <Card.Body>
                  <Card.Title style={{background: "cornflowerblue", color: "white", padding: "4px"}}>{project.name}</Card.Title>
                  <Card.Img variant="top" src={project.image} />
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
  
