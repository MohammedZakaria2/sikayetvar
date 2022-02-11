import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BottomFooter from './BottomFooter';
import './style.css';
import TopFooter from './TopFooter';

const Footer = () => {
  return (
    <footer className="_footer">
      <Container>
        <Row className="justify-content-center">
          <Col lg={11}>
            <TopFooter />
            <BottomFooter />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
