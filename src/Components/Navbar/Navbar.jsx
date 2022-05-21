import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
export const Navbar = () => {
  return (
    <div className="navbar-main">
      <Link to="/" >Home</Link>
       <Link to="/add-city">Add City</Link>
      <Link to="/add-country">Add Country</Link> 
        {/* <a href="/">Home</a> */}
    </div>
  );
};
