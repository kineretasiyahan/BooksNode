import { useState, useContext } from "react";
import { userLogin } from "../../../service/uesrs";
import { Link } from "react-router-dom";
import {
  LOGIN_SUCCESS,
  LOGIN_START,
  LOGIN_FAILURE,
} from "../../../context/constans";
import { Context } from "../../../context/context";
import "./signIn.scss";
const SignInForm = () => {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const [userIn, setUserIn] = useState({});
  const [errorLoginHa, setErrorLoginHa] = useState({});
  const {dispatch } = useContext(Context);

  const handelInput = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: LOGIN_START });
    try {
      await userLogin(details).then((res) => {
        console.log(res);
        res.success ? setUserIn(res) : setErrorLoginHa(res);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      });
    } catch (e) {
      dispatch({ type: LOGIN_FAILURE });
      console.log(e);
    }

    userIn
      ? (window.location.pathname = "/")
      : (window.location.pathname = "/SignIn");
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
        <button className="button-form" type="submit">
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
