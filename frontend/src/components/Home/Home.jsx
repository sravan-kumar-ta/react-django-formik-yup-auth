import React from "react";

const Home = () => {
   return (
      <section className="bg-white dark:bg-gray-900">
         <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
               <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
                  Powering innovation at{" "}
                  <span className="font-extrabold">200,000+</span> companies
                  worldwide
               </h2>
               <p className="mb-4 font-light">
                  Track work across the enterprise through an open,
                  collaborative platform. Link issues across Jira and ingest
                  data from other software development tools, so your IT support
                  and operations teams have richer contextual information to
                  rapidly respond to requests, incidents, and changes.
               </p>
               <p className="mb-4 font-medium">
                  Deliver great service experiences fast - without the
                  complexity of traditional ITSM solutions.Accelerate critical
                  development work, eliminate toil, and deploy changes with
                  ease.
               </p>
            </div>
         </div>
      </section>
   );
};

export default Home;
