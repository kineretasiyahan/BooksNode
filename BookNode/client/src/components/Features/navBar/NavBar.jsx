import React from "react";
import { Link } from "react-router-dom";
import { ImBook } from "react-icons/im";
import "./navbar.scss"

const NavBar = () => {
  return (
    <div className="navbar-continer">
      <div className="navbar-logo-div">
        <h4 className="navbar-logo">
          B{<ImBook />} {<ImBook />}k Node
        </h4>
      </div>
      <div className="navbar-links-div">
        <Link to="/">Home</Link>
        <Link to="/Books">Books</Link>
        <Link to="Abut">Abut</Link>
        <Link to="/Payment">Payment</Link>
        <Link to="/Contact">Contact</Link>
      </div>

      <div className="navbar-links-div-sign/login">
        <Link to="Register">Sign-in</Link>
        <Link to="Login">Login</Link>
      </div>
    </div>
  );
};

export default NavBar;
