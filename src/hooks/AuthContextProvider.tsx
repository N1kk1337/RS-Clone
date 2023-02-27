/* eslint-disable react/jsx-no-constructed-context-values */
import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState, createContext } from 'react';
import { auth } from '../firebase';

export const defaultUserInfo = {
  avatarImg: '',
  city: '',
  country: '',
  email: '',
  favoriteFilm: '',
  firstName: '',
  friends: [],
  lastName: '',
  likeCats: false,
  likeDogs: false,
  location: '',
  nickName: '',
  uid: '',
};
export const AuthContext = createContext({ currentUser: defaultUserInfo });

export function AuthContextProvider({ children }: any) {
  const [currentUser, setCurrentUser] = useState(defaultUserInfo);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user: any) => {
      setCurrentUser(user);
    });
    return () => {
      unsub();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
}
