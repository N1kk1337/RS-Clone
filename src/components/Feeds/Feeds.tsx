/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from 'react';
import { AiOutlineComment, AiOutlineLike } from 'react-icons/ai';
import { IoMdSend } from 'react-icons/io';
import ReactQuill from 'react-quill';
import parse from 'html-react-parser';
import { Button, Form } from 'react-bootstrap';
import avatar from '../../assets/camera_50.png';
import './Feeds.scss';
import User from '../../data/test-data/User';

function Feeds(props: { personInfo: User }): JSX.Element {
  const person = props.personInfo;
  const [postSetting, setPostSetting] = useState(false);
  const [postLike, setPostLike] = useState(false);
  const [comment, setComment] = useState(false);
  const [commentText, setCommentText] = useState('');
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
  function addCommentHandler() {
    comment ? setComment(false) : setComment(true);
  }

  function sendComment(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const htmlElemnts: string = (e.target as HTMLElement).querySelector(
      '.ql-editor',
    )?.innerHTML as string;
    htmlElemnts === '<p><br></p>' ? setCommentText('') : setCommentText(htmlElemnts);
    // htmlElements for post
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
        <button
          type="button"
          className="reactions comment"
          onKeyUp={(e) => handlerKeyDown(e.keyCode)}
          onClick={addCommentHandler}
        >
          <AiOutlineComment size={30} color="#444" />
        </button>
      </div>
      {comment ? (
        <>
          <hr />
          <div>{parse(commentText)}</div>
          <Form className="add-comment_place" onSubmit={(e) => sendComment(e)}>
            <hr />
            <ReactQuill placeholder="Add comment" className="add-comment" />
            <Button type="submit" className="btn-submit_comment"><IoMdSend className="send-icon" /></Button>
          </Form>
        </>
      )
        : ''}
    </div>
  );
}

export default Feeds;
