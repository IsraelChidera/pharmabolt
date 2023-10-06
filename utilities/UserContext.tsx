'use client'
import React, { createContext, useContext } from 'react';

type UserContextType = {
    getUser: () => void
}

const UserContext = createContext({} as UserContextType);

export function useUserContext() {
    return useContext(UserContext);
}

export function UserProvider({ children }: { children: React.ReactNode }) {

    const getUser = () => {

    }

    return (
        <UserContext.Provider value={{ getUser }}>
            {children}
        </UserContext.Provider>
    )
}