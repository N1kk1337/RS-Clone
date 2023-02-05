/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from 'react';
import { AiOutlineComment, AiOutlineLike } from 'react-icons/ai';
import avatar from '../../assets/camera_50.png';
import './Feeds.scss';

function Feeds(): JSX.Element {
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
            <img src={avatar} alt="png" />
          </div>
          <div className="post-info">
            <h4 className="post-author">Michael Jackson</h4>
            <p className="post-time">today at 12:20</p>
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
