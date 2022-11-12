import React, { useEffect, useState } from "react";
import { createContext } from "react";
import {authapi} from "../services/apiauth";


const AuthContext = createContext();
    
export function AuthProvider({children}){
    const[autenticado,setAutenticado] = useState(false)
    async function handleLogin(){
    const data = await authapi();
    }
    return <AuthContext.Provider value={{handleLogin,autenticado}}>
        {children}
    </AuthContext.Provider>
}

export default AuthContext;

