import React from "react";
import "./Signup.css";

import {
   MDBInput,
   MDBBtn,
   MDBCard,
   MDBCardBody,
   MDBRow,
   MDBCol,
} from "mdb-react-ui-kit";

const Signup = () => {
   return (
      <div className="container">
         <MDBCard alignment="center">
            <h4 className="fw-bold mt-4">Sign Up</h4>
            <hr />
            <MDBCardBody className="px-5">
               <form>
                  <MDBRow className="mb-3">
                     <MDBCol>
                        <MDBInput label="First name" />
                     </MDBCol>
                     <MDBCol>
                        <MDBInput label="Last name" />
                     </MDBCol>
                  </MDBRow>
                  <MDBInput label="Username" type="text" className="mb-3" />
                  <MDBInput label="Email" type="email" className="mb-3" />
                  <MDBInput label="Password" type="password" className="mb-3" />
                  <MDBInput
                     label="Confirm Password"
                     type="password"
                     className="mb-3"
                  />
                  <MDBBtn type="submit">sign up</MDBBtn>
               </form>
            </MDBCardBody>
         </MDBCard>
      </div>
   );
};

export default Signup;
