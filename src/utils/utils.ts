import { useQuery, useQueryClient } from '@tanstack/react-query';
import {
  setDoc, doc, getDoc, getDocs, query, collection, addDoc,
} from 'firebase/firestore';
import { useEffect } from 'react';
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
    friends,
  } = user;

  try {
    const userRef = doc(db, 'users', userId);

    const postsRef = collection(userRef, 'posts');
    await setDoc(doc(db, 'users', userId), {
      userId,
      firstName: firstName ?? '',
      lastName: lastName ?? '',
      nickName: nickName ?? '',
      email: email ?? '',
      location: location ?? '',
      country: country ?? '',
      city: city ?? '',
      avatarImg: avatarImg ?? '',
      likeCats: likeCats ?? false,
      likeDogs: likeDogs ?? false,
      favoriteFilm: favoriteFilm ?? '',
      friends: friends ?? [],
    });
    await addDoc(postsRef, {
      firstName: firstName ?? '',
      lastName: lastName ?? '',
      nickName: nickName ?? '',
      avatarImg: '',
      like: 0,
      time: new Date().toISOString(),
      text: 'Hello World!',
      views: 0,
      userId,
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

export async function createPost(
  userId: string,
  text: string,
  firstName: string,
  lastName: string,
  nickName: string,
  avatarImg: string,
) {
  try {
    const newPost = {
      text, time: new Date().toISOString(), firstName, lastName, nickName, avatarImg, userId,
    };
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

export async function getFriends(userId:string) {
  const userPostsRef = collection(db, 'users', userId, 'friends');
  const q = query(userPostsRef);
  const querySnapshot = await getDocs(q);
  const friends:IUser[] = querySnapshot.docs.map((document) => document.data() as IUser);
  return friends;
}

export const useFirestoreCollection = (collectionPath: string) => {
  const queryClient = useQueryClient();
  const queryKey = `firestoreCollection/${collectionPath}`;

  const {
    status, data, error, refetch,
  } = useQuery([queryKey], async () => {
    const collectionRef = collection(db, collectionPath);
    const querySnapshot = await getDocs(collectionRef);
    const documents = querySnapshot.docs.map((document) => ({
      id: document.id,
      ...document.data(),
    }));
    return documents;
  });

  useEffect(() => {
    if (status === 'success') {
      queryClient.setQueryData([queryKey], data);
    }
  }, [queryClient, queryKey, status, data]);

  return {
    status, data, error, refetch,
  };
};

export async function getAllUsers() {
  const usersCollection = collection(db, 'users');
  const querySnapshot = await getDocs(usersCollection);
  const users = querySnapshot.docs.map((document) => document.data() as IUser);
  return users;
}

export async function addFriend() {

}
