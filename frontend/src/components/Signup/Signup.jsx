import React from "react";
import { Formik, Form } from "formik";
import SignupValidationSchema from "../../utils/validationSchemas";
import InputField from "../InputField/InputField";

const initialValues = {
   firstName: "",
   lastName: "",
   username: "",
   email: "",
   password: "",
   confirmPassword: "",
};

const handleSubmit = (values) => {
   console.log("Form values", values);
};

const Signup = () => {
   return (
      <Formik
         initialValues={initialValues}
         validationSchema={SignupValidationSchema}
         onSubmit={handleSubmit}
      >
         {({ isSubmitting, touched, errors }) => (
            <Form className="max-w-md mx-auto p-6 bg-white rounded shadow-md mt-10">
               <div className="flex space-x-4 mb-4">
                  <div className="w-1/2">
                     <InputField
                        name="firstName"
                        label="First Name"
                        touched={touched}
                        errors={errors}
                     />
                  </div>
                  <div className="w-1/2">
                     <InputField
                        name="lastName"
                        label="Last Name"
                        touched={touched}
                        errors={errors}
                     />
                  </div>
               </div>
               <InputField
                  name="username"
                  label="Username"
                  touched={touched}
                  errors={errors}
               />
               <InputField
                  name="email"
                  label="Email"
                  type="email"
                  touched={touched}
                  errors={errors}
               />
               <InputField
                  name="password"
                  label="Password"
                  type="password"
                  touched={touched}
                  errors={errors}
               />
               <InputField
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  touched={touched}
                  errors={errors}
               />
               <div className="flex items-center justify-between">
                  <button
                     type="submit"
                     disabled={isSubmitting}
                     className="mx-auto w-2/4 bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                     Sign Up
                  </button>
               </div>
            </Form>
         )}
      </Formik>
   );
};

export default Signup;
