import {
  addDoc, collection, doc, getDoc,
} from 'firebase/firestore';
import { IUser } from '../components/types';
import { db } from '../firebase';
import { useAppSelector } from '../hooks/redux';

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

export async function getUserData() {
  const { id } = useAppSelector((state) => state.userAuth);
  if (id) {
    const docRef = doc(db, 'users', id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!');
    }
  }

  // const currentUser:IUser =
}
