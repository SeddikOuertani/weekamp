import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPhoneAlt, faPlus, faQuestionCircle, faTree, faUser } from "@fortawesome/free-solid-svg-icons";
import Logo from '../../assets/images/weekamp_logo.png';
import "./navbar.style.css";

const Navbar = (props) => {

  const navigate = useNavigate();

  const navigateToAddEvent = () => {
    navigate("/addevent")
  }

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
            <span className="link-text">HOME</span>
          </NavLink>
        </li>
        <li className="link-wrapper">
          <NavLink className="link" to={"/events"}>
            <FontAwesomeIcon className="link-icon" icon={faTree} />
            <span className="link-text">EVENTS</span>
          </NavLink>
        </li>
        <li className="link-wrapper">
          <NavLink className="link" to={"/contact"}>
            <FontAwesomeIcon className="link-icon" icon={faPhoneAlt} />
            <span className="link-text">CONTACT US</span>
          </NavLink>
        </li>
      </ul>
      <div className="personal-wrapper">
      <button onClick={navigateToAddEvent} className="btn add-event-btn">
          <FontAwesomeIcon icon={faPlus}/>
          <span className="text">EVENT</span>
        </button>
        <button className="btn btn-login">
          <FontAwesomeIcon icon={faUser} />
          <span className="text">LOGIN</span>
        </button>
        <button className="btn btn-login">
          <FontAwesomeIcon icon={faQuestionCircle} />
          <span className="text">ABOUT US</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
