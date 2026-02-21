import AuthContext from "./authContext";
import { useState } from "react";

export function AuthProvider({children}) {
    const [user, setUser] = useState(null);

    const login = (userData) => {
        setUser(userData);
    }
    
    const logout = async () => {
        await fetch('http://localhost:5000/api/logout', {
            method: 'POST',
            credentials: 'include',
        });
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}