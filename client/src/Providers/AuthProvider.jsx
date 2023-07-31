import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
      const [user, setUser] = useState(null);
      const [loading, setLoading] = useState(true);
      const googleProvider = new GoogleAuthProvider();

      const createUser = (email, password) => {
            setLoading(true);
            return createUserWithEmailAndPassword(auth, email, password);
      };

      const signIn = (email, password) => {
            setLoading(true);
            return signInWithEmailAndPassword(auth, email, password);
      };

      const googleSignIn = () => {
            setLoading(true);
            return signInWithPopup(auth, googleProvider);
      };

      const logOut = () => {
            setLoading(true);
            return signOut(auth);
      };

      const updateUserProfile = (user, name, photo) => {
            setLoading(true);
            return updateProfile(auth.currentUser, {
                  displayName: name, photoURL: photo
            }).then(() => {
                  const updatedUser = { ...user, displayName: name, photoURL: photo };
                  setUser(updatedUser);
                  setLoading(false);
            });
      };

      useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, currentUser => {
                  setUser(currentUser);

                  // jwt get and set token
                  if (currentUser) {
                        axios.post('https://bistro-boss-server-six-chi.vercel.app/jwt', { email: currentUser.email })
                              .then(data => {
                                    localStorage.setItem('access-token', data.data);
                                    setLoading(false);
                              });
                  }
                  else {
                        localStorage.removeItem('access-token');
                  }
            });
            return () => {
                  return unsubscribe();
            };
      }, []);

      const authInfo = {
            user,
            loading,
            createUser,
            signIn,
            googleSignIn,
            logOut,
            updateUserProfile
      };

      return (
            <AuthContext.Provider value={authInfo}>
                  {children}
            </AuthContext.Provider>
      );
};

export default AuthProvider;