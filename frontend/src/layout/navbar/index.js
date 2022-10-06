import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPlus, faTree } from "@fortawesome/free-solid-svg-icons";
import Logo from '../../assets/images/weekamp_logo.png';
import "./navbar.style.css";

const Navbar = (props) => {
  return (
    <div className="navbar-wrapper">
      <div id={props.Id} className="navbar-outer-wrapper animation"/>
      <div className="logo-wrapper">
        <img className="logo" src={Logo} alt={"weekamp-logo"}/>
      </div>
      <ul className="link-list">
        <li className="link-wrapper">
          <NavLink className="link" to={"/home"}>
            <FontAwesomeIcon className="link-icon" icon={faHome}/>
            <span className="link-text">home</span>
          </NavLink>
        </li>
        <li className="link-wrapper">
          <NavLink className="link" to={"/addevent"}>
            <FontAwesomeIcon className="link-icon" icon={faPlus} />
            <span className="link-text">event</span>
          </NavLink>
        </li>
        <li className="link-wrapper">
          <NavLink className="link" to={"/events"}>
            <FontAwesomeIcon className="link-icon" icon={faTree} />
            <span className="link-text">events</span>
          </NavLink>
        </li>
      </ul>
      <div className="personal-wrapper"></div>
    </div>
  );
};

export default Navbar;
