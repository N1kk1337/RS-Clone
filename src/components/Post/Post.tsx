import React from 'react';
import { Button } from 'react-bootstrap';
import Loading from '../Loading/Loading';
import { IFeedPost } from '../types';
import './Post.scss';
import placeholderAvatar from '../../assets/user.png';

type Props = {
  post: IFeedPost;
  handleDelete: (userId: string, postId: string) => Promise<void>;
};

function Post(props: Props) {
  const { post, handleDelete } = props;

  return (
    !post
      ? <Loading />
      : (
        <div className="feed-post">
          <div className="post-header">
            <div className="user-info">
              <div className="avatar">
                <img src={post.avatarImg === '' ? placeholderAvatar : post.avatarImg} alt="png" />
              </div>
              <div className="post-info">
                <h4 className="post-author">
                  {post.firstName}
                  {' '}
                  {post.lastName}
                </h4>
              </div>
            </div>
          </div>
          <div className="post-text_place">
            <span>{post.text}</span>
          </div>
          <Button onClick={() => handleDelete(post.userId, post.id?.toString())}>DELETE</Button>
        </div>
      )
  );
}

export default Post;
