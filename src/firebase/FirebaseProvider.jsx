import { getAuth } from "firebase/auth";
import { createContext } from "react";
import app from "./firebase.config";

export const AuthContext=createContext(null)
const auth=getAuth(app)

const FirebaseProvider = ({children}) => {

    const authInfo={

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