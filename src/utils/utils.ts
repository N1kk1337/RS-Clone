import {
  setDoc, doc, getDoc, getDocs, query, collection, addDoc, deleteDoc,
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
  const docSnap = await getDoc(docRef).then();
  if (docSnap.exists()) {
    const { uid, email, ...rest } = docSnap.data();
    const user:IUser = { userId: uid, email, ...rest };
    return user;
  }
  console.log('No such document!');
  return null;
}

export async function getUserPosts(userId: string) {
  const userPostsRef = collection(db, 'users', userId, 'posts');
  const q = query(userPostsRef);
  const querySnapshot = await getDocs(q);
  const posts:IFeedPost[] = querySnapshot.docs.map((document) => document.data() as IFeedPost);
  return posts;
}

export async function createPost(userId: string, text: string) {
  try {
    const newPost = { text, time: new Date().toISOString() };
    const postsRef = collection(db, 'users', userId, 'posts');
    const newPostRef = await addDoc(postsRef, newPost);
    const postId = newPostRef.id;
    console.log('New post created with ID: ', postId);
    const postWithId = { id: postId, ...newPost };
    const postRef = doc(db, 'users', userId, 'posts', postId);
    await setDoc(postRef, postWithId);
  } catch (error) {
    console.error('Error creating post: ', error);
  }
}
