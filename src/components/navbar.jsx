import React from "react";
import "./navstyles.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img
          src="https://unbounce.com/wp-content/themes/unbounce2019/assets/img/unbounce-icon-dark.svg?v=1"
          alt=""
        />
      </div>
      <div className="nav-list-items">
        <li>Products</li>
        <li>Solutions</li>
        <li>Pricings</li>
        <li>Learn</li>
        <li>contact</li>
      </div>
      <div className="login">
        <button className="btn btn-light">Login</button>
        <button className="btn btn-primary">Start my free Trial</button>
      </div>
    </div>
  );
};
export default Navbar;
