import React, { createContext, useState, useContext } from "react";
import axiosInstance from "../api/axiosInstance";
import { useNavigate } from "react-router-dom"; // Ensure this is within a Router context
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
   const [authTokens, setAuthTokens] = useState(() =>
      localStorage.getItem("authToken")
         ? JSON.parse(localStorage.getItem("authToken"))
         : null
   );
   // Q : The reason authTokens is managed by useState() instead of being simply assigned to a variable.
   // Ans : Using useState() to manage authTokens ensures that the state is reactive, persists across
   // re-renders, and can be easily updated in response to user actions or other side effects.
   // This is essential for creating dynamic and responsive UIs in React.

   const navigate = useNavigate();

   const signupUser = async (userData) => {
      try {
         const { data } = await axiosInstance.post("user/", userData);
         return { status: "success", data };
      } catch (error) {
         const serverError = error.response?.data || "Something went wrong";
         return { status: "error", data: serverError };
      }
   };

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
         throw new Error("Invalid login credentials");
      }
   };

   const logoutUser = () => {
      setAuthTokens(null);
      localStorage.removeItem("authToken");
      navigate("/login"); // Navigate after logout
   };

   const fetchUsers = async () => {
      try {
         const response = await axios.get("http://localhost:8000/api/users/", {
            headers: {
               Authorization: `Bearer ${authTokens?.access}`,
            },
         });
         return response.data;
      } catch (error) {
         if (error.response?.status === 401) {
            logoutUser();
         }
         throw error;
      }
   };

   return (
      <AuthContext.Provider
         value={{ authTokens, signupUser, loginUser, logoutUser, fetchUsers }}
      >
         {children}
      </AuthContext.Provider>
   );
};

export const useAuth = () => useContext(AuthContext);
