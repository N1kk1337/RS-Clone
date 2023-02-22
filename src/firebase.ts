// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCERLFmvKhSniniQ8LeXamqq7LubBV9z4c',
  authDomain: 'rsclonechat.firebaseapp.com',
  databaseURL: 'https://rsclonechat-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'rsclonechat',
  storageBucket: 'rsclonechat.appspot.com',
  messagingSenderId: '259718149151',
  appId: '1:259718149151:web:84529b96490885938bd12a',
  measurementId: 'G-Q2NLWMTECV',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
