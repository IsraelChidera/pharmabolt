'use client'
import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '@/firebase';

type UserContextType = {
    getUser: () => void,
    currentUser: any
}

const UserContext = createContext({} as UserContextType);

export function useUserContext() {
    return useContext(UserContext);
}

export function UserProvider({ children }: { children: React.ReactNode }) {

    const [currentUser, setCurrentUser] = useState("");
    const getUser = () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const uid = user.uid;
                console.log("user: ", user);
                console.log("user.uid: ", uid);
                setCurrentUser(uid);
                console.log("current user", currentUser);

                // ...
            } else {
                // User is signed out
                // ...
            }
        });
    }

    useEffect(() => {
        getUser();
    }, [currentUser])

    return (
        <UserContext.Provider value={{ getUser, currentUser }}>
            {children}
        </UserContext.Provider>
    )
}