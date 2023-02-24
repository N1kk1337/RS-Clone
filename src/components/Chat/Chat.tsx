import React, {
  useEffect, useRef, useState, KeyboardEvent,
} from 'react';
import './Chat.scss';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import {
  collection, orderBy, limit, query, serverTimestamp, addDoc, where, getDocs,
} from 'firebase/firestore';
// import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { db, auth } from '../../firebase';
import ChatMessage from './ChatMessage/ChatMessage';
import ChatUsers from './ChatUsers/ChatUsers';

function Chat() {
  const [user] = useAuthState(auth);
  const messageRef = collection(db, 'messages');
  const queryRef = query(messageRef, orderBy('createdAt', 'desc'), limit(20));
  const [messages] = useCollection(queryRef);
  const [username, setUsername] = useState('');
  const [someUser, setSomeUser] = useState({});
  const [err, setErr] = useState(false);

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

  // const logOut = async () => {
  //   await signOut(auth);
  // };
  // const googleSignIn = async () => {
  //   const provider = await new GoogleAuthProvider();
  //   // await setDoc(doc(db, 'userChats', provider),);
  //   return signInWithPopup(auth, provider);
  // };

  const handleSearch = async () => {
    const q = query(
      collection(db, 'users'),
      where('name', '==', username),
    );
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setSomeUser(doc.data());
      });
    } catch (error) {
      setErr(true);
    }
  };
  const handleKey = (e: KeyboardEvent<HTMLElement>) => e.code === 'Enter' && 'NumpadEnter' && handleSearch();

  return (
    <div className="row justify-content-center">
      <div className="chat">
        <div className="chat-sidebar bg-primary">
          <div className="search-users">
            <input
              type="text"
              className="search-input"
              placeholder="Search"
              onChange={(e) => setUsername((e.target as HTMLInputElement).value)}
              onKeyDown={handleKey}
            />
          </div>
          <div className="chat-users">
            {
              err && <p>User Not defined</p>
            }
            {
              someUser && <ChatUsers userinfo={someUser} />
            }
          </div>
        </div>
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

export default Chat;
