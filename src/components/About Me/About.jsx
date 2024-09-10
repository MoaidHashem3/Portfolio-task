import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './About.css';

const About = () => {
  return (
    <Container fluid className="about-container" >
      <Row className="d-flex align-items-center">
        <Col md={4} className="about-title">
          <h1>About Me</h1>
        </Col>

        <Col md={8}>
          <Card className="about-card shadow-lg">
            <Card.Body>
              <Card.Text>
                <p>
                  Hi, I'm <strong>Moaid Hashem</strong>, a passionate web developer and a graphic designer with expertise in both front-end and back-end development. I love creating interactive, dynamic web applications.
                </p>
                <p>
                  As a <strong>Graphic Designer</strong> and <strong>Developer</strong> in the same time,I can both design and devlope your website
                </p>
                <p>
                  Apart from coding, I enjoy Video Games and Tv Series. You also can find me devloping some small video games in my free time!
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
