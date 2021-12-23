import React, { useState } from "react";
import { Link } from "react-router-dom";
import { userRegistration } from "../../../service/uesrs";
import "./signUp.scss"
const SignUp = () => {

  const [userSignUp, setUserSignUp] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handelInput = (e) => {
    setUserSignUp({ ...userSignUp, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(userSignUp);
  };
  return (
    <div className="signUp-root">
  
      
      {/* <div className="rotate-div"> */}
      <form onSubmit={onSubmit} className="form-root">
      <h1>Sing Up</h1>
        {/* <label className="label-form">First Name :</label> */}
        <input className="input-form"
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Enter your first name"
          value={userSignUp.firstName}
          onChange={handelInput}
        />
        {/* <label className="label-form">Last Name :</label> */}
        <input className="input-form"
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Enter your last name"
          value={userSignUp.lastName}
          onChange={handelInput}
        />
        {/* <label className="label-form">Email :</label> */}
        <input className="input-form"
          type="email"
          name="email"
          id="email"
          placeholder="Enter email"
          value={userSignUp.email}
          onChange={handelInput}
        />
        {/* <label className="label-form">Password :</label> */}
        <input className="input-form"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={userSignUp.password}
          onChange={handelInput}
        />
        <button
          className="button-form"
          type="submit"
          onClick={() => {
            userRegistration(userSignUp);
          }}
        >
          Register
        </button>
      </form>
     <Link to="/SignIn" className="link">I'm already registered</Link>
      {/* </div> */}
    </div>
  
  );
};

export default SignUp;
