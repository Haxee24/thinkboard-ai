import { Outlet, Navigate } from "react-router";
import { useAuth } from "../context/authContext";
import { useEffect } from "react";

export default function ProtectedRoute() {
    const { isAuthenticated, loading } = useAuth();
    if (loading) {
        return <div>Loading...</div>;
    };

    if (!isAuthenticated) {
        return <Navigate to="/signin" replace />;
    }
    // useEffect(() => {
    //     if (!user) {
    //         navigate("/signup");
    //     }
    // }, [user, navigate]);
    return <Outlet/>
}