import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Popup from '../PopUp';
import './ProjectCard.css';

function ProjectCard(props) {
  
    for(let i = 0; i < props.projects.length; i++){
      let techString='';
      for(let j = 0; j < props.projects[i].technologies.length; j++){  
        if(j < props.projects[i].technologies.length-1){
          techString = techString + props.projects[i].technologies[j] + ", ";
        }else{
          techString = techString + " & " + props.projects[i].technologies[j];
        }
      }
      props.projects[i].techString = techString;
    }

    return (
      <div>
        <Row>
          {props.projects.map(project => (
            <Col className="d-flex justify-content-center" key={project.id}>
              <Card className='Card'>
              <Card.Body>
                  <Card.Title className='CardTitle'>{project.name}</Card.Title>
                  <Card.Img className='CardImage' style={{width: 'auto'}} src={project.image} />
                  <hr/>
                  <Popup content = {project.description} ></Popup>
                  <hr/>
                  <Card.Text style={{height: '4rem'}}><b>Technologies Used:</b> {project.techString}</Card.Text>
                  <hr/>
                  <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                    <Button variant="primary" href = {project.link} target = "_blank">Deployed App</Button>
                    <Button variant="primary" href = {project.repo} target = "_blank">Github Repo</Button>
                  </div>
              </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
     </div>
    )
  }
  
  export default ProjectCard;
  
