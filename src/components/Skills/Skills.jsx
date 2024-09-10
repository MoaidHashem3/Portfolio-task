import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import './Skills.css';

const Skills = () => {
  
  const skills = [
    { name: 'Adobe Photoshop', level: 100 },
    { name: 'Adobe Illustrator', level: 95 },
    { name: 'Adobe XD', level: 90 },
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript' , level: 80 },
    { name: 'Node.js', level: 70 },
    { name: 'MongoDB', level: 68 },
    { name: 'React', level: 50 }
  ];

  return (
    <Container fluid className="skills-container">
      <Row className="justify-content-center">
        <Col md={10} className="skills-section">
          <h2 className="text-center mb-5 ">My Skills</h2>
          {skills.map((skill, index) => (
            <Row key={index} className="align-items-center mb-4 ">
              <Col md={3} className="skill-name ">
                <h5>{skill.name}</h5>
              </Col>
              <Col md={10}>
                <ProgressBar 
                  now={skill.level} 
                  label={`${skill.level}%`} 
                  className="progress-bar-custom "
                />
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
