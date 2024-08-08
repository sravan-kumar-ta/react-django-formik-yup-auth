import React from "react";

const UserList = () => {
   return (
      <div class="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1 p-4 mt-16">
         <h2 class="flex gap-3 items-center m-auto text-lg font-bold md:flex-col md:gap-2">
            Users
         </h2>
         <ul class="flex flex-col gap-3.5 w-full sm:max-w-md m-auto">
            <li class="w-full bg-gray-100 p-3 rounded-md">
               Limited operating hours
            </li>
            <li class="w-full bg-gray-100 p-3 rounded-md">
               Limited warranty coverage
            </li>
            <li class="w-full bg-gray-100 p-3 rounded-md">
               Limited geographic coverage
            </li>
         </ul>
      </div>
   );
};

export default UserList;
