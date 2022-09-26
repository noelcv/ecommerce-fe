import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth';

import app from './firebase';

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();


export const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    return user;
  } catch (error: unknown) {
    console.error('Error signing in user with Google: ', error);
  }
}


export const logInWithEmailAndPasswordService = async (email: string, password: string) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    const user = res.user;
    return user;
  } catch (error: unknown) {
    console.error('Error signing in user with email and password: ', error);
  }
}

export const registerWithEmailAndPasswordService = async (email: string, password: string) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    return user;
  } catch (error: unknown) {
    console.error('Error signing in user with email and password: ', error);
  }
}

export const sendPasswordResetEmailService = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error: unknown) {
    console.error('Error sending password reset email: ', error);
  }
}

export const logOutService = async () => {
  try {
    await signOut(auth);
  } catch (error: unknown) {
    console.error('Error signing out user: ', error);
  }
}