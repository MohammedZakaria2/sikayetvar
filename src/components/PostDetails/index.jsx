import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const PostDetails = ({ post, user, photo }) => {
  return (
    <div className="post_details">
      <div className="post_content">
        <h2 className="title">{post?.title}</h2>
        <p className="body">{post?.body}</p>
      </div>
      <div className="user_section">
        <img
          className="avatar"
          src={photo?.url}
          loading="lazy"
          alt={user?.name}
        />
        <Link to={`/profile/${user?.id}`}>
          <p className="use_info name">{user?.name}</p>
          <p className="use_info address">
            {user?.address?.city} - {user?.address?.street}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default PostDetails;
