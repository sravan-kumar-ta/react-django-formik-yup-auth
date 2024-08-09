import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const ProtectedRoute = ({ element, ...rest }) => {
   const { authTokens } = useAuth();

   return authTokens ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
