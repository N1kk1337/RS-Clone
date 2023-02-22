/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';

function ChatUsers() {
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
      <img src="https://hips.hearstapps.com/hmg-prod/images/michael-jackson-gettyimages-89446104.jpg?resize=1200:*" alt="png" className="user-image" />
      <p className="user-name">Michael Jeckson</p>
      <p className="user-last_text">last text</p>
    </div>
  );
}

export default ChatUsers;
