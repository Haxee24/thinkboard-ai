import { Outlet, useNavigate } from "react-router";
import { useAuth } from "../context/authContext";
import { useEffect } from "react";

export default function ProtectedRoute() {
    const { isAuthenticated, loading } = useAuth();
    const navigate = useNavigate();
    if (loading) {
        return <div>Loading...</div>;
    };

    if (!isAuthenticated) {
        navigate("/signup", { replace: true });
        return null;
    }
    // useEffect(() => {
    //     if (!user) {
    //         navigate("/signup");
    //     }
    // }, [user, navigate]);
    return <Outlet/>
}