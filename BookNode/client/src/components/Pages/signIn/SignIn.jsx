import React, { useState } from "react";
import {userLogin} from "../../../service/uesrs"

const SignInForm = () => {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  // const [userIn, setUserIn] = useState({});

  const handelInput = (e) => {
    setDetails({...details,[e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(details); 
  };

  // const newU = {...details}

  return (
<<<<<<< HEAD
    <div>
      <h1>Sing In</h1>
=======
    <div >
      <h1>Sing Up</h1>
>>>>>>> 6eff02d11363e4b6f180c635a6f379b2bcd78ef5
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
            onClick={() => {
              userLogin(details);
            }}
        >
          Sign-in
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
