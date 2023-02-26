/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import './ChatUsers.scss';

function ChatUsers({ userinfo }: any) {
  const { firstName, lastName, avatarImg } = userinfo;
  const [userActive, setUserActive] = useState('');
  const [activeUsers, setActiveUsers] = useState<NodeListOf<Element>>();

  useEffect(() => {
    const usersRemoveClass = document.querySelectorAll('.chat-user');
    setActiveUsers(usersRemoveClass);
  }, [userActive]);

  function startChat() {
    if (userActive === '') {
      (activeUsers as NodeListOf<Element>).forEach((user) => {
        user.classList.remove('active');
      });
      setUserActive('active');
    } else {
      setUserActive('');
    }
  }
  return (
    <div className={`chat-user ${userActive}`} onClick={() => startChat()}>
      <img src={avatarImg} alt="png" className="user-image" />
      <p className="user-name">{firstName}</p>
      <p className="user-last_text">{lastName}</p>
    </div>
  );
}

export default ChatUsers;
