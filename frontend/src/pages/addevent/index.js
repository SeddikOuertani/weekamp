import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import IconInput from "../../components/iconinput";
import "./addevent.style.css";

const AddEvent = (props) => {
  return (
    <div className="add-event-wrapper page-wrapper">
      <div className="form">
        <div className="header">
          <h1 className="title">Add event</h1>
        </div>
        <div className="body">
          <div className="form-image">
            <div className="image-section"></div>
            <div className="add-event-icon-wrapper">
              <FontAwesomeIcon className="add-event-icon" icon={faPlus} />
            </div>
          </div>
          <div className="form-rows">
            <div className="form-row">
              <div className="from-group">
                <label htmlFor=""></label>
                <IconInput />
              </div>
              <div className="from-group">
                <label htmlFor=""></label>
                <IconInput />
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="add-program"></div>
          <div className="submit"></div>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
