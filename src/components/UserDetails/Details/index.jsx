import React from 'react';
import DetailsItem from '../DetailsItem';

const Details = ({ user }) => {
  return (
    <div className="user_details_left">
      <div className="info">
        <h4 className="user_name">{user.name}</h4>
        <p className="user_city">{user.address.city}</p>
      </div>
      <div className="user_rest_details">
        <DetailsItem label="Username" value={user.username} />
        <DetailsItem label="Email" value={user.email} />
        <DetailsItem label="Phone" value={user.phone} />
        <DetailsItem type="link" label="Website" value={user.website} />
        <DetailsItem label="Company" value={user.company.name} />
      </div>
    </div>
  );
};

export default Details;
