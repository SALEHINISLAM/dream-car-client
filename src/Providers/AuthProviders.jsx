import { createContext, useEffect, useState } from "react";
import { auth, database } from "../Firebase/firebase.config";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  GoogleAuthProvider, 
  createUserWithEmailAndPassword
} from "firebase/auth";
import { ref, set } from "firebase/database";
import PropTypes from "prop-types";

export const AuthContext = createContext(null);
const AuthProviders = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading]=useState(true);  

  const createAdmin = async (email, password, fullName) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await updateProfile(user, {
        displayName: fullName,
      });
      await set(ref(database, "users/" + user.uid), {
        fName: fullName,
        email: email,
      });
      setAdmin(user);
      return userCredential;
    } catch (error) {
      throw error;
    }
  };

  const AdminSignIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setAdmin(userCredential.user);
      return userCredential;
    } catch (error) {
      throw error;
    }
  };

  const AdminSignInWithGoogle = async () => {
    const googleProvider = new GoogleAuthProvider();
    try {
      const response = await signInWithPopup(auth, googleProvider);
      const user = response.user;
      const userRef = ref(database, "users/"+user.uid);
      set(userRef, {
        fName:user.displayName,
        email:user.email,
      });
      setAdmin(user);
      return response.user;
    } catch (error) {
      throw error;
    }
  };

  const AdminLogOut = async () => {
    try {
      await signOut(auth);
      setAdmin(null);
      return;
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user in state changed");
      console.log(currentUser);
      if (currentUser) {
        setAdmin(currentUser);
      } else {
        setAdmin(null);
      }
      console.log('admin state set to ',currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const adminAuthInfo = {
    admin,
    loading,
    createAdmin,
    AdminSignIn,
    AdminSignInWithGoogle,
    AdminLogOut,
  };
  return (
    <AuthContext.Provider value={adminAuthInfo}>
      {children}
    </AuthContext.Provider>
  );
};
AuthProviders.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AuthProviders;
