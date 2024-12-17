import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// Component bảo vệ các route
const ProtectedRoute: React.FC = () => {
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;