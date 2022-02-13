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
    <Row className="top_footer">
      <Col lg={12}>
        <Row className="h-100">
          <Col lg={6} className="flex-grow-1">
            <h2 className="footer_title">Thank you for supporting us!</h2>
            <p className="footer_subtext">
              Let's get in touch on any of these platforms.
            </p>
          </Col>
          <Col>
            <div className="icons_main_container">
              <div className="social_icons_wrapper">
                {ICONS.map((icon, index) => (
                  <OverlayTrigger
                    key={index}
                    placement="top"
                    delay={{ show: 150, hide: 200 }}
                    overlay={renderTooltip}
                  >
                    <a
                      target={'_blank'}
                      href={icon.link}
                      className={`social_icons ${icon.name}`}
                      rel="noreferrer"
                    >
                      {icon.icon}
                    </a>
                  </OverlayTrigger>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default TopFooter;
