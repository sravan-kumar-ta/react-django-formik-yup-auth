import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import UserList from "./components/UserList/UserList";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import Home from "./components/Home/Home";

function App() {
   return (
      <BrowserRouter>
         <AuthProvider>
            <Navbar />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route
                  path="/users"
                  element={<ProtectedRoute element={<UserList />} />}
               />
               <Route path="/signup" element={<Signup />} />
               <Route path="/login" element={<Login />} />
            </Routes>
         </AuthProvider>
      </BrowserRouter>
   );
}

export default App;
