import React from "react";
import { Link } from "react-router-dom";
import { ImBook } from "react-icons/im";
import "./navbar.scss"

const NavBar = () => {
  return (
    <div className="navbar-continer">
      <div className="navbar-logo-div">
        <h4 className="navbar-logo">
          B{<ImBook />}{<ImBook />}k Node
        </h4>
      </div>
      <div className="navbar-links-div">
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/Books">Books</Link>
        <Link className="link" to="Abut">Abut</Link>
        <Link className="link" to="/Payment">Payment</Link>
        <Link className="link" to="/Contact">Contact</Link>
      </div>

      <div className="navbar-links-div-sign/login">
        <Link className="link-sign" to="Register">Sign-in</Link>
        <Link className="link-login" to="Login">Login</Link>
      </div>
    </div>
  );
};

export default NavBar;
