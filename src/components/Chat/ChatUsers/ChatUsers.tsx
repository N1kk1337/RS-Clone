/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import './ChatUsers.scss';

function ChatUsers({ userinfo }: any) {
  // console.log(Object.values(userinfo));
  const { text } = userinfo;
  const [userActive, setUserActive] = useState('');
  const [activeUsers, setActiveUsers] = useState<NodeListOf<Element>>();

  useEffect(() => {
    const usersRemoveClass = document.querySelectorAll('.chat-user');
    setActiveUsers(usersRemoveClass);
  }, [userActive]);
  // useEffect(() => {
  //   for (const info in userinfo) {
  //     console.log(info);
  //   }
  // }, []);

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
      <img src="https://hips.hearstapps.com/hmg-prod/images/michael-jackson-gettyimages-89446104.jpg?resize=1200:*" alt="png" className="user-image" />
      <p className="user-name">{text}</p>
      <p className="user-last_text">daswds</p>
    </div>
  );
}

export default ChatUsers;
