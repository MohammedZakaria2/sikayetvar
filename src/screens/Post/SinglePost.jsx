import React from 'react';
import ShowCase from '../../components/ShowCase';
import ContentContainer from '../../components/ContentContainer';
import { useParams } from 'react-router-dom';
import PostDetails from '../../components/PostDetails';
import usePost from '../../hooks/usePost';

const SinglePost = () => {
  let { id } = useParams();
  const [content, isPostLoading] = usePost(id);
  const { post, user, photo } = content;

  return (
    <div className="page single_post">
      <ShowCase />
      <ContentContainer>
        {isPostLoading ? (
          <h2 className="message">Loading...</h2>
        ) : (
          <PostDetails post={post} user={user} photo={photo} />
        )}
      </ContentContainer>
    </div>
  );
};

export default SinglePost;
