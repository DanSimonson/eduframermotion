import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className= 'mt-96'>
      <Link to="/" className="title">
        mariposaweb
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to="/firstexample">Simple Banner</NavLink>
        </li>
        <li>
          <NavLink to="/secondexample">Over-the-Top-BannerVariant </NavLink>
        </li>
        <li>
          <NavLink to="/thirdexample">Subtle BannerVariant</NavLink>
        </li>
      </ul>
    </nav>
  );
};
