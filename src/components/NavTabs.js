import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  const location = useLocation();

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          About Me
        </Link>
        <Link to="/Portfolio" className={location.pathname === "/Portfolio" ? "nav-link active" : "nav-link"}>
          Portfolio
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
