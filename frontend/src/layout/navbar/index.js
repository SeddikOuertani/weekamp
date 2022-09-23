import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./navbar.style.css";

const Navbar = (props) => {
  return (
    <div className="navbar-wrapper">
      <div className="logo-wrapper"></div>
      <ul className="link-list">
        <li className="link-wrapper">
          <NavLink className={"link"} to={"/home"}>
            <FontAwesomeIcon icon={faHome} />
            home
          </NavLink>
        </li>
        <li className="link-wrapper">
          <NavLink className={"link"} to={"/addevent"}>
            <FontAwesomeIcon icon={faPlus} />
            event
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
