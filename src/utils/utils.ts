import {
  setDoc, doc, getDoc,
} from 'firebase/firestore';
import { IFeedPost, IUser } from '../components/types';
import { db } from '../firebase';

export async function writeUserData(user: IUser) {
  const {
    userId,
    email,
    firstName,
    lastName,
    nickName,
    location,
    country,
    city,
    avatarImg,
    likeCats,
    likeDogs,
    favoriteFilm,
    posts,
  } = user;

  try {
    await setDoc(doc(db, 'users', userId), {
      userId,
      firstName,
      lastName,
      nickName,
      email,
      location,
      country,
      city,
      avatarImg,
      likeCats,
      likeDogs,
      favoriteFilm,
      posts,
    });
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

export async function getUserData(userId: string) {
  const docRef = doc(db, 'users', userId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const { uid, email, ...rest } = docSnap.data();
    const user:IUser = { userId: uid, email, ...rest };
    return user;
  }
  console.log('No such document!');
  return null;
}
