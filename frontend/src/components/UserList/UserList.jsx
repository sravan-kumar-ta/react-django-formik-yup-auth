import React from "react";

const UserList = () => {
   return (
      <div className="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1 p-4 mt-16">
         <h2 className="flex gap-3 items-center m-auto text-lg font-bold md:flex-col md:gap-2">
            Users
         </h2>
         <ul className="flex flex-col gap-3.5 w-full sm:max-w-md m-auto">
            <li className="w-full bg-gray-100 p-3 rounded-md">
               Limited operating hours
            </li>
            <li className="w-full bg-gray-100 p-3 rounded-md">
               Limited warranty coverage
            </li>
            <li className="w-full bg-gray-100 p-3 rounded-md">
               Limited geographic coverage
            </li>
         </ul>
      </div>
   );
};

export default UserList;
