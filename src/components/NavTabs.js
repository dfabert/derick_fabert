import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  const location = useLocation();

  return (
  <nav class="navbar navbar-expand-sm navbar-light bg-dark">
    <div class="navbar-brand" style={{color: "lightgray"}}>Glen Derick Fabert</div>
      <div id="navbarNav">
        <ul class="navbar-nav" >
          <li class="nav-item">
            <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
              About Me
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/Portfolio" className={location.pathname === "/Portfolio" ? "nav-link active" : "nav-link"}>
              Portfolio
            </Link>
          </li>
          <li class='dropdown'>
            <div class="nav-link" style={{color: "blanchedalmond"}}>Contact</div>
            <div class="dropdown-content">
              <a href="tel:1-317-258-0021">Phone:  (317) 258-0021</a>
              <a href="mailto:glen.fabert@gmail.com">E-mail:  glen.fabert@gmail.com</a>
            </div>
          </li>
        </ul>
      </div> 
  </nav>
  );
}

export default NavTabs;
