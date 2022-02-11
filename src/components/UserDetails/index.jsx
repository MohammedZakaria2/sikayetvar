import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Description from './Description';
import Details from './Details';
import './style.css';
import GoogleMapReact from 'google-map-react';
import { Marker } from '../../assets/svgs';

const UserDetails = ({ data }) => {
  const { user } = data;
  const coordinations = {
    lat: Number(user.address.geo.lat),
    lng: Number(user.address.geo.lng),
  };
  return (
    <div className="user_details">
      <Row>
        <Col lg={6}>
          <Details user={user} />
        </Col>
        <Col lg={6}>
          <div style={{ height: '50vh', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: 'AIzaSyB7MsWN3Od4KhybwjJPRxwVk5jWTbJXfZ4',
              }}
              defaultCenter={coordinations}
              defaultZoom={10}
              yesIWantToUseGoogleMapApiInternals
            >
              <Marker />
            </GoogleMapReact>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <Description />
        </Col>
      </Row>
    </div>
  );
};

export default UserDetails;
