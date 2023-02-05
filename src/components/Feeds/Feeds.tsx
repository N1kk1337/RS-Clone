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
  console.log(person);
  const [postSetting, setPostSetting] = useState(false);
  const [postLike, setPostLike] = useState(false);
  const mouseOverHandler = function () {
    setPostSetting(true);
  };
  const mouseOutHandler = function () {
    setPostSetting(false);
  };

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
              <li className="setting-item">Delete Post</li>
              <li className="setting-item">Edit Post</li>
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
