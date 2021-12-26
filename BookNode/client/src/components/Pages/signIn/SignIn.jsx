import React, { useState ,useContext} from "react";
import { userLogin } from "../../../service/uesrs";
import { Link } from "react-router-dom";
import { LOGIN_SUCCESS,LOGOUT } from "../../../context/constans";
import {LogSucces,Logout} from '../../../context/actionns'
import { context} from "../../../context/context"
import "./signIn.scss";
const SignInForm = () => {

  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const [userIn, setUserIn] = useState({});
  const [errorLoginHa, setErrorLoginHa] = useState({});
const {userLog, dispatch } = useContext(context);


  const handelInput = (e) => {
    setDetails({...details,[e.target.name]: e.target.value });
  };

  const onSubmit = async(e) => {

    e.preventDefault();
    debugger
  await userLogin(details)
      .then((res) => {
        res.success? setUserIn(res): setErrorLoginHa(res)
        try{

    // userIn? LogSucces(userIn):Logout()
     dispatch({ type: LOGIN_SUCCESS,payload:userIn })
   }  
      
    catch(e){
console.log(e);
    }
      })
      .catch((error) => console.log(error));

      userIn? window.location.pathname = '/' : window.location.pathname = '/SignIn' 
  };

  console.log(errorLoginHa);
  return (
    <div className="sign-in-root">
      <form className="form-root-sign-in" onSubmit={onSubmit}>
        <h1>Sing in</h1>
        <input
          className="input-form"
          type="email"
          name="email"
          id="email"
          placeholder="Enter email"
          value={details.email}
          onChange={handelInput}
        />

        <input
          className="input-form"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={details.password}
          onChange={handelInput}
        />
        <p>{errorLoginHa?.message}</p>
        <button
          className="button-form"
          type="submit"
        >
          Login
        </button>
      </form>
      <Link to="/SignUp" className="link">
        I'm not registered yet
      </Link>
    </div>
  );
};

export default SignInForm;
