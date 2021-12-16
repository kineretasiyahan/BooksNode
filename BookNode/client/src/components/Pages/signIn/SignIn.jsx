import React, { useState } from "react";

const SignInForm = ({ signIn, error }) => {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const [userIn, setUserIn] = useState({});

  const handelInput = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // signIn(details);
    console.log(userIn);
    // setUserIn([...userIn,details])
    
   
  };

  // const newU = {...details}

  return (
    <div>
      <h1>Sing Up</h1>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter email"
          value={details.email}
          onChange={handelInput}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={details.password}
          onChange={handelInput}
        />
        <button
          type="submit"
          //   onClick={() => {
          //     userRegistration(details);
          //   }}
        >
          Sign-in
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
