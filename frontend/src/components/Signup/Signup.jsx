import React from "react";
import { Formik, Form } from "formik";
import { signupValidationSchema } from "../../utils/validationSchemas";
import InputField from "../InputField/InputField";
import SubmitButton from "../InputField/SubmitButton";
import { useNavigate } from "react-router-dom";

const initialValues = {
   firstName: "",
   lastName: "",
   username: "",
   email: "",
   password: "",
   confirmPassword: "",
};

const Signup = () => {
   const navigate = useNavigate();

   const handleSubmit = (values, { setSubmitting, resetForm }) => {
      console.log("Form values", values);
      setTimeout(() => {
         setSubmitting(false);
         resetForm();
         navigate("/login", { state: { username: values.username } });
      }, 2000);
   };

   return (
      <div className="bg-gray-100 min-h-screen">
         <div className="pt-1">
            <Formik
               initialValues={initialValues}
               validationSchema={signupValidationSchema}
               onSubmit={handleSubmit}
            >
               {({ isSubmitting, touched, errors }) => (
                  <Form className="max-w-md mx-auto p-6 pt-1 bg-white rounded shadow-md mt-10">
                     <h1 className="text-center text-2xl my-4 font-bold">
                        SignUp
                     </h1>
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
                        <SubmitButton
                           isSubmitting={isSubmitting}
                           text="Signup"
                        />
                     </div>
                  </Form>
               )}
            </Formik>
         </div>
      </div>
   );
};

export default Signup;
