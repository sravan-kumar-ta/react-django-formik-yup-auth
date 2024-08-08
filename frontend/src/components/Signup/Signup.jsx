import React from "react";
import { Formik, Form } from "formik";
import SignupValidationSchema from "../../utils/validationSchemas";
import InputField from "../InputField/InputField";
import SubmitButton from "../InputField/SubmitButton";

const initialValues = {
   firstName: "",
   lastName: "",
   username: "",
   email: "",
   password: "",
   confirmPassword: "",
};

const handleSubmit = (values, { setSubmitting, resetForm }) => {
   console.log("Form values", values);
   setTimeout(() => {
      setSubmitting(false);
      resetForm();
   }, 2000);
};

const Signup = () => {
   return (
      <Formik
         initialValues={initialValues}
         validationSchema={SignupValidationSchema}
         onSubmit={handleSubmit}
      >
         {({ isSubmitting, touched, errors }) => (
            <Form className="max-w-md mx-auto p-6 pt-0 bg-white rounded shadow-md mt-10">
               <h1 className="text-center text-2xl my-4 font-bold">SignUp</h1>
               <hr />
               <div className="flex space-x-4 mt-2">
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
                  <SubmitButton isSubmitting={isSubmitting} />
               </div>
            </Form>
         )}
      </Formik>
   );
};

export default Signup;
