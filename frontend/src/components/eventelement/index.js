import {
  faArrowRight,
  faFeatherPointed,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import EventImage from "../../assets/images/camping_grounds2.jpg";
import './eventelement.style.css';

const EventElement = (props) => {
  return (
    <div className="event-element-wrapper">
      <div className="image-wrapper">
        <img src={EventImage} alt="event-image" />
      </div>
      <div className="info">
        <div className="header">
          <h2 className="title">Campi maana</h2>
          <div className="header-end">
            <p className="campsite">Cap sirat</p>
            <button className="btn join-btn">
              <FontAwesomeIcon icon={faFeatherPointed} />
              <span>Join</span>
            </button>
          </div>
        </div>
        <div className="description-wrapper">
          <p className="description">
            this is a description test to test the event description display and
            I'm making it long so that I can fully test it in terms of height
            and width and all it's innuances. let's hope for the best
          </p>
        </div>
        <div className="footer">
        
          <div className="section">
            <p className="date-wrapper">
              from :  <span className="date">12/11/2022</span>
            </p>
            <p className="date-wrapper">
              to : <span className="date">15/11/2022</span>
            </p>
          </div>
          <div className="section">
            <button className="program-btn btn">
              <span className="btn-text">VIEW PROGRAM </span>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventElement;
