import AuthContext from "./authContext";
import { useState } from "react";

export function AuthProvider({children}) {
    const [user, setUser] = useState(null);

    const checkAuth = async () => {
        try {
            const res = await fetch('http://localhost:4000/spi/users/profile', {
                method: 'GET',
                credentials: 'include',
            });
            if (res.ok) {
                const data = await res.json();
                setUser(data.user);
            } else {
                setUser(null);
            }
        } catch (err) {
            console.log(err);
            setUser(null);
        }
    }

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