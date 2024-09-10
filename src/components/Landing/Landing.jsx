import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Landing.css'; 

const Landing = () => {
  return (
    <>
    <div className='bg-img'></div>
    <div className="landing-page">
      <Container fluid className="text-center d-flex justify-content-center align-items-center landing-content">
        <Row>
          <Col>
            <h1 className="display-4 text-light">Moaid Hashem</h1>
            <p className="lead text-light">
              This is a simple landing page with a beautiful background and centered text.
            </p>
            <button className="btn btn-primary btn-lg">Get Started</button>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
};

export default Landing;