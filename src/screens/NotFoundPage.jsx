import React from 'react';
import '././../assets/style/notfound.css';
import notFoundImage from '././../assets/images/notfound.svg';
import ShowCase from '../components/ShowCase';
import ContentContainer from '../components/ContentContainer';

const NotFoundPage = () => {
  return (
    <div className="page notfound">
      <ShowCase />
      <ContentContainer>
        <div className="not_found">
          <div className="not_found__content">
            <img className="no_found_image" src={notFoundImage} alt="404" />
            <h2 className="error_number">404</h2>
            <p className="error_message">The page you requested is not found</p>
          </div>
        </div>
      </ContentContainer>
    </div>
  );
};

export default NotFoundPage;
