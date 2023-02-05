/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import 'react-quill/dist/quill.snow.css';
import PostForm from '../../components/PostForm/PostForm';

function FeedPost() {
  return (
    <div className="feed-posts col-12">
      <div className="container">
        <PostForm />
      </div>
    </div>
  );
}

export default FeedPost;
