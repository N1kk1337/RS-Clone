import React from 'react';
import { Button } from 'react-bootstrap';
// import { AiOutlineLike } from 'react-icons/ai';
import avatar from '../../assets/camera_50.png';
import { IFeedPost, IUser } from '../types';
import './Post.scss';

type Props = {
  user: IUser;
  post: IFeedPost;
  handleDelete:(userId:string, postId:string)=>Promise<void>;
};

function Post(props:Props) {
  // const [postLike, setPostLike] = useState(false);
  const { user, post, handleDelete } = props;

  // function timeConvert(param: string) {
  //   const [month, monthName, day, year, time] = param.split(' ');

  //   return `${day} ${monthName} ${time}`;
  // }

  // function likeHandler() {
  //   if (postLike) setPostLike(false);
  //   else setPostLike(true);
  // }

  return (
    <div className="feed-post">
      <div className="post-header">
        <div className="user-info">
          <div className="avatar">
            <img src={!user.avatarImg ? avatar : user.avatarImg} alt="png" />
          </div>
          <div className="post-info">
            <h4 className="post-author">
              {user.firstName}
              {' '}
              {user.lastName}
            </h4>
            {/* <p className="post-time">{timeConvert(posts.time as string)}</p> */}
          </div>
        </div>
      </div>
      <div className="post-text_place">
        <span>{post.text}</span>
      </div>
      {/* <div className="like-comments">
        <button
          type="button"
          className="reactions like"
          onClick={likeHandler}
          onKeyDown={likeHandler}
        >
          {postLike ? (
            <AiOutlineLike size={30} color="rgb(244, 0, 0)" />
          ) : (
            <AiOutlineLike size={30} color="rgb(68, 68, 68)" />
          )}
        </button>
      </div> */}
      <Button onClick={() => handleDelete(user.userId, post.id?.toString())}>DELETE</Button>
    </div>
  );
}

export default Post;
