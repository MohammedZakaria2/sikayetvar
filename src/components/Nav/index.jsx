import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Logo } from '../../assets/svgs';
import './style.css';

const Nav = () => {
  return (
    <nav className="_nav">
      <Container>
        <Row className="justify-content-center">
          <Col lg={11}>
            <div className="nav_outer">
              <Row>
                <Col>
                  <div className="inner">
                    <Logo />
                    <Link className="link" to={'/'}>
                      Posts
                    </Link>
                  </div>
                </Col>
                <Col md="auto">
                  <button className="call_to_action">Login</button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </nav>
  );
};

export default Nav;
