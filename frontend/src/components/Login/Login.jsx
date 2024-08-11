import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import InputField from "../InputField/InputField";
import SubmitButton from "../InputField/SubmitButton";
import { loginValidationSchema } from "../../utils/validationSchemas";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
   const location = useLocation();
   const { loginUser } = useAuth();
   const username = location.state?.username || "";
   const [errorMessage, setErrorMessage] = useState("");

   const initialValues = {
      username: username,
      password: "",
   };

   const handleSubmit = async (values, { setSubmitting }) => {
      try {
         setErrorMessage(""); // Clear any previous error message
         console.log("Submitting login request...");
         await loginUser(values.username, values.password);
         console.log("Login successful");
      } catch (error) {
         console.error("Login failed", error);
         setErrorMessage(
            "Login failed. Please check your credentials and try again."
         );
      } finally {
         setSubmitting(false);
         console.log("Submitting set to false");
      }
   };

   useEffect(() => {
      if (username) {
         document.getElementsByName("password")[0].focus();
      } else {
         document.getElementsByName("username")[0].focus();
      }
   }, [username]);

   return (
      <div className="bg-gray-100 min-h-screen">
         <div className="pt-16">
            <Formik
               initialValues={initialValues}
               validationSchema={loginValidationSchema}
               onSubmit={handleSubmit}
            >
               {({ isSubmitting, touched, errors }) => (
                  <Form className="max-w-sm mx-auto p-16 pt-6 bg-white rounded shadow-md mt-10">
                     <h1 className="text-center text-2xl my-4 font-bold">
                        SignIn
                     </h1>
                     <hr />
                     <InputField
                        name="username"
                        label="Username"
                        touched={touched}
                        errors={errors}
                     />
                     <InputField
                        type="password"
                        name="password"
                        label="Password"
                        touched={touched}
                        errors={errors}
                     />

                     {errorMessage && (
                        <div className="text-red-500 text-center my-2">
                           {errorMessage}
                        </div>
                     )}

                     <div className="flex items-center justify-between">
                        <SubmitButton
                           isSubmitting={isSubmitting}
                           text="Login"
                        />
                     </div>
                  </Form>
               )}
            </Formik>
         </div>
      </div>
   );
};

export default Login;
