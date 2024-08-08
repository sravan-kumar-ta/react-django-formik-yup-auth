import { Form, Formik } from "formik";
import React from "react";
import InputField from "../InputField/InputField";
import SubmitButton from "../InputField/SubmitButton";
import { loginValidationSchema } from "../../utils/validationSchemas";
import { useLocation } from "react-router-dom";

const Login = () => {
   const location = useLocation();
   const username = location.state?.username;

   const initialValues = {
      username: username,
      password: "",
   };

   const handleSubmit = (values, { setSubmitting, resetForm }) => {
      console.log("login values:", values);
      setTimeout(() => {
         setSubmitting(false);
         resetForm();
      }, 2000);
   };

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
