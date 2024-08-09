import React, { createContext, useState, useContext } from "react";
import axiosInstance from "../api/axiosInstance";
import { useNavigate } from "react-router-dom"; // Ensure this is within a Router context

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
   const [authTokens, setAuthTokens] = useState(() =>
      localStorage.getItem("authToken")
         ? JSON.parse(localStorage.getItem("authToken"))
         : null
   );

   const navigate = useNavigate(); // Correct usage

   const loginUser = async (username, password) => {
      try {
         const response = await axiosInstance.post("token/", {
            username,
            password,
         });
         setAuthTokens(response.data);
         localStorage.setItem("authToken", JSON.stringify(response.data));
         navigate("/"); // Navigate after login
      } catch (error) {
         console.error("Login failed:", error);
      }
   };

   const logoutUser = () => {
      setAuthTokens(null);
      localStorage.removeItem("authToken");
      navigate("/login"); // Navigate after logout
   };

   return (
      <AuthContext.Provider value={{ authTokens, loginUser, logoutUser }}>
         {children}
      </AuthContext.Provider>
   );
};

export const useAuth = () => useContext(AuthContext);
