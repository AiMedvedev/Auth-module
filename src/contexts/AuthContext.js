import { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import {auth} from "../firebase";
import { updateProfile, signOut } from "firebase/auth";


const AuthContext = createContext();


export const useAuth = () => {
  return useContext(AuthContext);
}


export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [username, setUsername] = useState();

  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function updateUserProfile(user, profile) {
    return updateProfile(user, profile);
  }

  function logout() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = auth.currentUser;
        const token = user && (await user.getIdToken());

        const payloadHeader = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        await fetch("auth-module-e9a14.firebaseapp.com", payloadHeader);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, [currentUser, username]);

  const value = {
    currentUser,
    login,
    logout,
    register,
    error,
    setError,
    updateUserProfile,
    username,
    setUsername
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}