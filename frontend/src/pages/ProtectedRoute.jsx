import { Outlet, useNavigate } from "react-router";
import { useAuth } from "../context/authContext";
import { useEffect } from "react";

export default function ProtectedRoute() {
    const { user } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (!user) {
            navigate("/signup");
        }
    }, [user, navigate]);
    return <Outlet/>
}