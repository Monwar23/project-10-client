import {  createUserWithEmailAndPassword, getAuth,  } from "firebase/auth";
import { createContext, useState } from "react";
import app from "./firebase.config";

export const AuthContext=createContext(null)
const auth=getAuth(app)



const FirebaseProvider = ({children}) => {

    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    // create user

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    
    const authInfo={
        user,
        setUser,
        loading,
        createUser
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>
        </div>
    );
};

export default FirebaseProvider;