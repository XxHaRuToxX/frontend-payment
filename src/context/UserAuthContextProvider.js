import { createContext, useContext, useEffect, useState } from "react";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged, 
    setPersistence,
    browserLocalPersistence,
    // Logeo con google
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth';
import { auth } from '../firebase/firebase';

const userAuthContext = createContext();

export const UserAuthContextProvider = ({children})=>{

    const [user, setUser] = useState("");
    const [pending, setPending] = useState(true);

    const signUp = (email, password)=>{
        return createUserWithEmailAndPassword( auth, email, password);
    }

    const logIn = (email, password)=>{
        return signInWithEmailAndPassword( auth, email, password);
    }
    // const logIn = (email, password)=>{
    //     setIsLogged(true);
    //     setIsVerified(true);
    //     return setPersistence( auth, browserLocalPersistence, signInWithEmailAndPassword(auth, email, password));
    // }
    const logInPersintense = ()=>{
        return setPersistence( auth, browserLocalPersistence);
    }

    const logOut = ()=>{
        return signOut(auth);
    }

    const googleSignIn = ()=>{
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider);
    }

    useEffect(() => {
        // onAuthStateChanged(auth, (currentUser)=>{
        //     setUser(currentUser);
        //     setPending(false);
        // });
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setPending(false);
        });

        return ()=>{
            unsubscribe();
        }
    }, []);

    if(pending){
        return <>Pending...</>
    }
    

    return(
        <userAuthContext.Provider
            value={{
                user,
                signUp,
                logIn,
                logOut,
                googleSignIn,
                logInPersintense,
            }}
        >
            {children}
        </userAuthContext.Provider>
    )
}

export const useUserAuth =()=>{
    return useContext(userAuthContext);
}
