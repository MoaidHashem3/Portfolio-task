import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={4} className="footer-section">
            <h5>About Me</h5>
            <p>
              Hi, I'm Moaid Hashem, a web developer and a graphic designer passionate about creating engaging, user-friendly websites.
            </p>
          </Col>
          <Col md={4} className="footer-section">
            <h5>Follow Me</h5>
            <div className="social-icons">
              <a href="https://www.facebook.com/Moaid1Hashem/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://x.com/Moaidhashem_" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/moaidhashem/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/MoaidHashem3" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </Col>
          <Col md={4} className="footer-section">
            <h5>Contact Me</h5>
            <p>Email: gamestorrent2015@gmail.com</p>
            <p>Phone: +20 1019088244</p>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <p>&copy; 2024 Moaid Hashem. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
