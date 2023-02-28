/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { auth } from '../../../firebase';
import './ChatMessage.scss';
import emptyAvatar from '../../../assets/empty-account.png';

function ChatMessage(props: any) {
  const { message, mode } = props;
  const {
    text, uid, photoURL, firstName,
  } = message;
  const className = uid === auth.currentUser?.uid ? 'send user-send' : 'recieved user-recieved';
  return (
    <div className={`${className} flex`}>
      <div className="bg">
        <div className={`${mode ? 'dark-bg' : 'light-bg'} user-message`}>
          <p className="user-name">{ firstName }</p>
          <p className={`${mode ? 'dark-color' : 'light-color'} text-message`}>{text}</p>
        </div>
      </div>
      <img src={photoURL === null ? emptyAvatar : photoURL} alt="png" className="avatar-user" />
    </div>
  );
}

export default ChatMessage;
