import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import {
  collection, orderBy, limit, query, serverTimestamp, addDoc,
} from 'firebase/firestore';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { db, auth } from '../../firebase';
import ChatMessage from '../Chat/ChatMessage/ChatMessage';

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

  const logOut = async () => {
    await signOut(auth);
  };
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  return (
    <div className="row justify-content-center">
      <div className="chat">
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

          <div className="buttons">
            {
                !user ? <button type="button" className="btn btn-primary loginWithGoogle" onClick={() => googleSignIn()}>Login with google</button>
                  : <button type="button" className="btn btn-danger logout" onClick={() => logOut()}>Log Out</button>
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
