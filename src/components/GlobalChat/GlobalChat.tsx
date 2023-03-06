/* eslint-disable import/no-extraneous-dependencies */
import React, {
  useEffect, useRef, useState, useContext,
} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import {
  collection,
  orderBy,
  query,
  serverTimestamp,
  addDoc,
} from 'firebase/firestore';
import { useTranslation } from 'react-i18next';

import { db, auth } from '../../firebase';
import ChatMessage from './ChatMessage/ChatMessage';
import './GlobalChat.scss';
import { AuthContext } from '../../hooks/AuthContextProvider';

import dark from '../../assets/dark.jpg';
import light from '../../assets/wallpaper.jpg';

function GlobalChat() {
  const [nightMode, setNightMode] = useState(false);
  const [t] = useTranslation();

  const [user] = useAuthState(auth);
  const messageRef = collection(db, 'messages');
  const queryRef = query(messageRef, orderBy('createdAt', 'desc'));
  const [messages] = useCollection(queryRef);

  const [formValue, setFormValue] = useState('');

  const scrollTo = useRef(null);
  const { currentUser } = useContext(AuthContext);

  const sendMessage = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!user || !formValue) return;
    const payload = {
      text: formValue,
      createdAt: serverTimestamp(),
      uid: user.uid,
      photoURL: user.photoURL,
      firstName: currentUser.email,
    };
    await addDoc(messageRef, payload);

    setFormValue('');
  };

  useEffect(() => {
    (scrollTo.current as any).scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="message-place"  data-testid="chat">
      <div className="chat-title">
        <h1 style={{ color: '#0069d9' }}>{t('button.global_chat')}</h1>
        <button
          type="button"
          onClick={() => setNightMode(!nightMode)}
          className={`btn btn-${nightMode ? 'light' : 'secondary'}`}
        >
          {nightMode ? 'Light' : 'Dark'}
        </button>
      </div>

      <div className="chat d-block">
        <div
          className="chat-texts"
          style={{ background: `url(${nightMode ? dark : light})` }}
        >
          <div className="messages">
            <div ref={scrollTo} />
            {messages
              && messages.docs.map((msg: { id: string; data: () => void }) => (
                <ChatMessage
                  key={msg.id}
                  message={msg.data() as any}
                  mode={nightMode}
                />
              ))}
          </div>
        </div>
        <form className="form">
          <input
            className="form-control mt-2 mb-2"
            type="text"
            value={formValue}
            onChange={(e) => setFormValue((e.target as HTMLInputElement).value)}
          />
          <button
            type="button"
            className="btn btn-info"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => sendMessage(e)}
          >
            {t('button.send')}
          </button>
        </form>
      </div>
    </div>
  );
}

export default GlobalChat;
