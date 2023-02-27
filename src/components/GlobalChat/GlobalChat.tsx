/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import {
  collection, orderBy, limit, query, serverTimestamp, addDoc,
} from 'firebase/firestore';
import { db, auth } from '../../firebase';
import ChatMessage from './ChatMessage/ChatMessage';
import './GlobalChat.scss';

function GlobalChat() {
  const [user] = useAuthState(auth);
  const messageRef = collection(db, 'messages');
  const queryRef = query(messageRef, orderBy('createdAt', 'desc'), limit(20));
  const [messages] = useCollection(queryRef);

  const [formValue, setFormValue] = useState('');

  const scrollTo = useRef(null);

  const sendMessage = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!user || !formValue) return;
    const payload = {
      text: formValue,
      createdAt: serverTimestamp(),
      uid: user.uid,
      photoURL: user.photoURL,
    };
    await addDoc(messageRef, payload);

    setFormValue('');
  };

  useEffect(() => {
    (scrollTo.current as any).scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="message-place">
      <h1 style={{ color: '#0069d9' }}>Global Chat</h1>
      <div className="chat d-block">
        <div className="chat-texts">
          <div className="messages">
            <div ref={scrollTo} />
            {
              messages && messages.docs.map((msg) => (
                <ChatMessage
                  key={msg.id}
                  message={msg.data() as any}
                />
              ))
            }
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
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default GlobalChat;
