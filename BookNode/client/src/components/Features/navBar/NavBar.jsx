import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/UserPage">UserPage</Link>
      {/* <Link to="Cart">Cart</Link> */}
      {/* <Link to="/Payment">Payment</Link>
            <Link to="/ContactUs">ContactUs</Link> */}
    </div>
  );
};

export default NavBar;
