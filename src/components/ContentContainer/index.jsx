import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './style.css';

const ContentContainer = ({ children }) => {
  return (
    <div className="content_container">
      <Container>
        <Row className="justify-content-center">
          <Col lg={11}>
            <div className="content_container_inner">{children}</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContentContainer;
