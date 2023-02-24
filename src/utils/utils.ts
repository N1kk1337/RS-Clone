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
) {
  try {
    console.log('добавляем');
    const docRef = await setDoc(doc(db, 'users', userId), {
      userId, firstName, lastName, nickName, email,
    });
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

export async function getUserData(userId: string) {
  const docRef = doc(db, 'users', userId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const { uid, ...rest } = docSnap.data();
    const user:IUser = { id: uid, ...rest };
    return user;
  }
  console.log('No such document!');
  return null;
}
