/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { auth } from '../../../firebase';
import './ChatMessage.scss';

function ChatMessage(props: any) {
  const { message } = props;
  const { text, uid, photoURL } = message;

  const className = uid === (auth.currentUser as { uid: string }) ? 'send user-send' : 'recieved user-recieved';
  return (
    <div className={className}>
      <p className="text-message">{text}</p>
      <img src={photoURL} alt="User Photo" className="avatar-user" />
    </div>
  );
}

export default ChatMessage;
