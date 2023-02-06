/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from 'react';
import { AiOutlineComment, AiOutlineLike } from 'react-icons/ai';
import User from '../../data/test-data/User';
import avatar from '../../assets/camera_50.png';
import './Feeds.scss';

function Feeds(props: { personInfo: User }): JSX.Element {
  const person = props.personInfo;
  const [postSetting, setPostSetting] = useState(false);
  const [postLike, setPostLike] = useState(false);
  const mouseOverHandler = () => {
    setPostSetting(true);
  };
  const mouseOutHandler = () => {
    setPostSetting(false);
  };
  const deletePost = () => {
    // ready for delete
    console.log(person.id);
  };
  const editPost = () => {
    // ready for update
    console.log(person.id);
  };

  function handlerKeyDown(e:number) {
    return e;
  }

  function likeHandler() {
    if (postLike) setPostLike(false);
    else setPostLike(true);
  }
  return (
    <div className="feed-post">
      <div className="post-header">
        <div className="user-info">
          <div className="avatar">
            <img
              src={!person.avatarImg ? avatar : person.avatarImg}
              alt="png"
            />
          </div>
          <div className="post-info">
            <h4 className="post-author">
              {person.firstName}
              {' '}
              {person.lastName}
            </h4>
            <p className="post-time">{person.email}</p>
          </div>
        </div>
        <div
          className="post-settings"
          onMouseOut={mouseOutHandler}
          onMouseOver={mouseOverHandler}
        >
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
          {postSetting ? (
            <ul className="settins">
              <li className="setting-item" onClick={deletePost} onKeyUp={(e) => handlerKeyDown(e.keyCode)}>Delete Post</li>
              <li className="setting-item" onClick={editPost} onKeyUpCapture={(e) => handlerKeyDown(e.keyCode)}>Edit Post</li>
            </ul>
          ) : (
            ''
          )}
        </div>
      </div>
      <div className="post-text_place">
        <p>texts</p>
      </div>
      <div className="like-comments">
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
        <button type="button" className="reactions comment">
          <AiOutlineComment size={30} color="#444" />
        </button>
      </div>
    </div>
  );
}

export default Feeds;
