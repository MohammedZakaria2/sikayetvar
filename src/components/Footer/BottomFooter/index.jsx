import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';
const BottomFooter = () => {
  return (
    <Row>
      <Col>
        <div className="inner_footer">
          <small className="copy_rights">
            © 2018 <span className="colored"> Şikayetvar. </span>
          </small>
          <Link className="footer_link" to={'/'}>
            Posts
          </Link>
        </div>
      </Col>
    </Row>
  );
};

export default BottomFooter;
