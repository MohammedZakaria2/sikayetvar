import React from 'react';
import { useParams } from 'react-router-dom';
import ContentContainer from '../components/ContentContainer';
import ShowCase from '../components/ShowCase';
import UserDetails from '../components/UserDetails';
import useUser from '../hooks/useUser';

const Profile = () => {
  let { id } = useParams();
  const [data, isLoading] = useUser(id);

  return (
    <div className="page profile">
      <ShowCase />
      <ContentContainer>
        {isLoading ? (
          <h2 className="message">Loading...</h2>
        ) : (
          <UserDetails data={data} />
        )}
      </ContentContainer>
    </div>
  );
};

export default Profile;
