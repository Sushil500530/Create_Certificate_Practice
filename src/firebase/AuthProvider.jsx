/* eslint-disable react/prop-types */
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSignIn = () => {
        setLoading(true)
        signInWithPopup(auth,googleProvider)
    }
    const gitHubSignIn = () => {
        setLoading(true)
        signInWithPopup(auth,githubProvider)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currnetUser => {
            setUser(currnetUser)
            setLoading(false)
            return () => {
                unSubscribe()
            }
        })
    }, [])

    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    const authInfo = {
        createUser,
        signInUser,
        user,
        loading,
        logout,
        googleSignIn,
        gitHubSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;