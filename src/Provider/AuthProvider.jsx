import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, SetUser] = useState(null);

  const [loading, setLoading] = useState(true);
  // console.log(loading, user);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      SetUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const githubProvider = new GithubAuthProvider();

  const githublogin = () => {
    return signInWithPopup(auth, githubProvider);
  };
  const googleProvider = new GoogleAuthProvider();

  const googlelogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const ForgetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  const emailVerification = () => {
    return sendEmailVerification(auth.currentUser);
  };

  const authData = {
    user,
    SetUser,
    createUser,
    logInUser,
    logOut,
    loading,
    setLoading,
    updateUser,
    googlelogin,
    githublogin,
    emailVerification,
    ForgetPassword,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
