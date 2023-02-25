import {
  setDoc, doc, getDoc,
} from 'firebase/firestore';
import { IUser } from '../components/types';
import { db } from '../firebase';

export async function writeUserData(
  userId:string,
  email:string,
  firstName:string,
  lastName:string,
  nickName:string,
  location?: string,
  country?: string,
  city?: string,
  avatarImg?: string,
  likeCats?: boolean,
  likeDogs?: boolean,
  favoriteFilm?: string,
) {
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
    });
  } catch (e) {
    // eslint-disable-next-line no-console
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
  // eslint-disable-next-line no-console
  console.log('No such document!');
  return null;
}
