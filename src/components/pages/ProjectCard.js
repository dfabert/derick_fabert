import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function ProjectCard(props) {
  let techOptions=[];
    for(let i = 0; i < props.projects.length; i++){
      let techString='';
      for(let j = 0; j < props.projects[i].technologies.length; j++){  
        if(j < props.projects[i].technologies.length-1){
          techString = techString + props.projects[i].technologies[j] + ", ";
        }else{
          techString = techString + " & " + props.projects[i].technologies[j];
        }

        //Create an array for a dropdown menu
        if(!techOptions.includes(props.projects[i].technologies[j])){
          techOptions.push(props.projects[i].technologies[j])
        }

      }
      props.projects[i].techString = techString;
    }

    console.log(techOptions);

    return (
    <div>
      <Row>
          {props.projects.map(project => (
            <Col className="d-flex justify-content-center">
              <Card style={{ width: '20rem', height: '32rem',  margin: '5px' }} >
              <Card.Body>
                  <Card.Title style={{background: "cornflowerblue", color: "white", padding: "4px"}}>{project.name}</Card.Title>
                  <Card.Img style={{height: '7rem', width: 'auto', maxWidth: '17rem', display: 'block', marginLeft: "auto", marginRight: "auto"}} src={project.image} />
                  <hr/>
                  <Card.Text style={{height: '6rem'}}>{project.description}</Card.Text>
                  <hr/>
                  <Card.Text style={{height: '6rem'}}>Technologies Used:  {project.techString} </Card.Text>
                  <hr/>
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
  
