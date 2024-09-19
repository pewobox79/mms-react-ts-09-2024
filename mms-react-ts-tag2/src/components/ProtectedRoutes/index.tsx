import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../store/UserContext";

function ProtectedRoutes() {

    const userContext = useContext(UserContext)

    console.log("user", userContext)

    if (!userContext?.user.state) {
        return <Navigate to="/login" replace />
    }

    return <Outlet />
}

export default ProtectedRoutes