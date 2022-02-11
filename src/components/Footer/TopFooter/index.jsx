import React from 'react';
import { Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { ICONS } from '../../../constants';
import './style.css';

const TopFooter = () => {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Follow us
    </Tooltip>
  );

  return (
    <Row>
      <Col lg={12}>
        <Row>
          <Col lg={6}>
            <h2 className="footer_title">Thank you for supporting us!</h2>
            <p className="footer_subtext">
              Let's get in touch on any of these platforms.
            </p>
          </Col>
          <Col lg={6}>
            <div className="social_icons_wrapper">
              {ICONS.map((icon, index) => (
                <OverlayTrigger
                  key={index}
                  placement="top"
                  delay={{ show: 150, hide: 200 }}
                  overlay={renderTooltip}
                >
                  <button className={`social_icons ${icon.name}`}>
                    {icon.icon}
                  </button>
                </OverlayTrigger>
              ))}
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default TopFooter;
