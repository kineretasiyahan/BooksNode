import { useContext } from "react";
import { Link } from "react-router-dom";
import { ImBook } from "react-icons/im";
import "./navbar.scss";
import { Context } from "../../../context/context";
import { userDecoding } from "../../utils/userDecoding";

const NavBar = () => {
  let { user, dispatch } = useContext(Context);
  if (user) {
    user = userDecoding(user);
  }

  return (
    <div className="navbar-continer">
      <div className="navbar-logo-div">
        <h4 className="navbar-logo">
          B{<ImBook className="navbar-logo" />}
          {<ImBook className="navbar-logo" />}KS NODE
        </h4>
      </div>
      <div className="navbar-links-div">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/Books">
          <h4 className="navbar-logo">
            Our B{<ImBook className="navbar-logo" />}
            {<ImBook className="navbar-logo" />}KS
          </h4>
        </Link>
        <Link className="link" to="/About">
          About us
        </Link>
        <Link className="link" to="/Contact">
          Contact
        </Link>
      </div>
      {user ? (
        <Link to="/SignIn">
          <button className="log-out" onClick={() => dispatch({ type: "LOGOUT" })}>Log out</button>
        </Link>
      ) : (
        <div className="navbar-links-div-sign-login">
          <Link className="link-sign" to="SignIn">
            Sign-in
          </Link>
          <Link className="link-login" to="SignUp">
            Sign-Up
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
