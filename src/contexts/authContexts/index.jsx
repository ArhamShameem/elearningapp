import { useAuth } from '@clerk/clerk-react';
import { initializeApp } from 'firebase/app';
import { onAuthStateChanged } from 'firebase/auth';
import { useContext, useEffect, useState } from 'react';

const AuthContext=React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({children}) {
 const [currentUSer,setCurrentUser]=useState(null);
 const [userLoggedIn,setUserLoggedIn]=useState(false);
 const [loading,setLoading]=useState(true);

 useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,initializeUser);
    return unsubscribe;
 },[])

 async function initializeUser(user){
    if(user){
        setCurrentUser({...user});
        setUserLoggedIn(true);

    }
    else{
        setCurrentUser(null);
    }
 }

const value={

    currentUSer,
    userLoggedIn,
    loading
}

return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
)

}