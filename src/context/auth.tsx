
import React, { createContext, useContext, useEffect, useState } from 'react';

import { login } from "./../services/api";


interface Props {
    children: React.ReactNode;
}

interface AuthContextData {
    signed: boolean;
    user: object | null;
    Login(user: object): Promise<void>
    Logout(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);


export const AuthProvider: React.FC<Props> = ({ children }: Props) => {
    const Login = async (user: object) => {
        await login(user).then((response) => {
            debugger
            setUser(response.data.user)

            sessionStorage.setItem("@App:user", response.data.user);
            sessionStorage.setItem("@App:token", response.data.token);
            
        }).catch((error) => {
            console.log("erraço: "+error);
        });
    }

    const [user, setUser] = useState<object | null>(null);

    function Logout() {
        setUser(null);
    }
    useEffect(() => {
        const userStored = sessionStorage.getItem("@App:user")
        const tokenStored = sessionStorage.getItem("@App:token")

        if (userStored && tokenStored) {
            setUser(JSON.parse(userStored))
        }
    }, [])


    return (
        <AuthContext.Provider value={{ signed: Boolean(user), user, Login, Logout }}>
            {children}
        </AuthContext.Provider >
    )
}

export default AuthContext;

export function useAuth() {
    const context = useContext(AuthContext)
    return context;
}