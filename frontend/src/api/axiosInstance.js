import axios from "axios";

const axiosInstance = axios.create({
   baseURL: "http://localhost:8000/api/",
   timeout: 3000,
   headers: {
      "Content-Type": "application/json",
   },
});

// Add an interceptor to include the token in requests
axiosInstance.interceptors.request.use((config) => {
   const token = localStorage.getItem("authToken");
   if (token) {
      config.headers.Authorization = `Bearer ${token}`;
   }
   return config;
});

export default axiosInstance;
