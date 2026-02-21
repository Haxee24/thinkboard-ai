import AuthContext from "./authContext";
import { useState, useEffect } from "react";

export function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const checkAuth = async () => {
        try {
            const res = await fetch('http://localhost:4000/api/users/profile', {
                method: 'GET',
                credentials: 'include',
            });
            if (res.ok) {
                const data = await res.json();
                setUser(data.user);
            } else {
                setUser(null);
                throw new Error('Failed to fetch user profile');
            }
        } catch (err) {
            console.log(err);
            setUser(null);
        } finally {
            setLoading(false);
        }
    }

    const login = (userData) => {
        setUser(userData);
    }
    
    const logout = async () => {
        await fetch('http://localhost:4000/api/users/logout', {
            method: 'POST',
            credentials: 'include',
        });
        setUser(null);
    }

    useEffect(() => {
        checkAuth();
    }, []);

    return (
        <AuthContext.Provider value={{
            user,
            login,
            logout,
            loading,
            isAuthenticated: !!user
        }}>
            {children}
        </AuthContext.Provider>
    )
}