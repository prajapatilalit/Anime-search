import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isLoggedIn }) => {
  return (
    <div>
      <ul className="navbar">
        <li>
          {!isLoggedIn ? <Link to="/">Login</Link> : <Link to="/">Logout</Link>}
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
