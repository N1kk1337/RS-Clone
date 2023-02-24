import { addDoc, collection } from 'firebase/firestore';
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
    const docRef = await addDoc(collection(db, 'users'), {
      userId, firstName, lastName, nickName, email,
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}
