import React from 'react';
import showcase from '../../assets/images/showcase.png';
import './style.css';

const ShowCase = () => {
  return (
    <header className="show_case">
      <img src={showcase} className="show_case_image" alt="showcase" />
    </header>
  );
};

export default ShowCase;
