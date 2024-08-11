import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";

const UserList = () => {
   const { fetchUsers } = useAuth();
   const [users, setUsers] = useState([]);

   useEffect(() => {
      const getUsers = async () => {
         try {
            const usersData = await fetchUsers();
            setUsers(usersData);
         } catch (error) {
            console.error("Failed to fetch users:", error);
         }
      };

      getUsers();
   }, [fetchUsers]);

   return (
      <div className="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1 p-4 mt-16">
         <h2 className="flex gap-3 items-center m-auto text-lg font-bold md:flex-col md:gap-2">
            Users
         </h2>
         <ul className="flex flex-col gap-3.5 w-full sm:max-w-md m-auto">
            {users.map((user) => (
               <li key={user.id} className="w-full bg-gray-100 p-3 rounded-md">
                  {user.first_name} | {user.last_name} | {user.username} |{" "}
                  {user.email}
               </li>
            ))}
         </ul>
      </div>
   );
};

export default UserList;
