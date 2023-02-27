/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { auth } from '../../../firebase';
import './ChatMessage.scss';
import emptyAvatar from '../../../assets/empty-account.png';

function ChatMessage(props: any) {
  const { message } = props;
  const {
    text, uid, photoURL, firstName,
  } = message;
  const className = uid === auth.currentUser?.uid ? 'send user-send' : 'recieved user-recieved';
  return (
    <div className={className}>
      <div className="user-info">
        <p className="user-name">{ firstName }</p>
        <p className="text-message">{text}</p>
      </div>
      <img src={photoURL === null ? emptyAvatar : photoURL} alt="png" className="avatar-user" />
    </div>
  );
}

export default ChatMessage;
