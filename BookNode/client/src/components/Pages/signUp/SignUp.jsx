import React, { useState } from "react";
import { userRegistration } from "../../../service/uesrs";

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
    
    <div>
      <h1>Sing Up</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Enter your first name"
          value={userSignUp.firstName}
          onChange={handelInput}
        />
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Enter your last name"
          value={userSignUp.lastName}
          onChange={handelInput}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter email"
          value={userSignUp.email}
          onChange={handelInput}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={userSignUp.password}
          onChange={handelInput}
        />
        <button
          type="submit"
          onClick={() => {
            userRegistration(userSignUp);
          }}
        >
          Register
        </button>
      </form>
    </div>
  
  );
};

export default SignUp;
