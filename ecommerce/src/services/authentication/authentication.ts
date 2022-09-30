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

export const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();


export const signInWithGoogle = async () => {
  try {
    console.log('auth', auth)
    console.log('googleProvider', googleProvider)
    const res = await signInWithPopup(auth, googleProvider);
    console.log('raw res in service', res)
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

export const registerWithEmailAndPassword = async (email: string, password: string) => {
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