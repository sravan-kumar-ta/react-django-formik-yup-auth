import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import UserList from "./components/UserList/UserList";

function App() {
   return (
      <BrowserRouter>
         <Navbar />
         <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
