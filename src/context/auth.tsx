import { createContext } from "react";

interface AuthProps {
}

export const AuthContext = createContext({} as AuthProps);

export const AuthProvider = (children: any) => {
    return <AuthContext.Provider value="">{children}</AuthContext.Provider>
}
