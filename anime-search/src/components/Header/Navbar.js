import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isLoggedIn }) => {
  return (
    <div>
      <ul className="navbar">
        <li>
          <Link to="/">{!isLoggedIn ? "Login" : "Logout"}</Link>
        </li>
        <li>
          <Link to="/animes">Animes</Link>
        </li>
        <li>
          <Link to="/signup">SignUp</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
