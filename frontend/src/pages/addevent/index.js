import { faCalendarDays, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import IconInput from "../../components/iconinput";
import "./addevent.style.css";

const AddEvent = (props) => {
  const navigate = useNavigate();

  const submitEvent = (e) => {
    e.preventDefault();

    console.log("submit-event");
  };

  const navigateToAddProgram = () => {
    navigate("/events/addevent/addprogram");
  };

  return (
    <div className="add-event-wrapper page-wrapper">
      <form onSubmit={submitEvent} className="form">
        <div className="header">
          <h1 className="title">Add event</h1>
        </div>
        <div className="horizontal-line"></div>
        <div className="body">
          <div className="form-group">
            <label htmlFor="formImage">
              <h2>Choose an image for your event</h2>
            </label>
            <div id="formImage" className="form-image">
              <div className="add-event-icon-wrapper">
                <FontAwesomeIcon className="add-event-icon" icon={faPlus} />
              </div>
            </div>
          </div>
          <div className="horizontal-line"></div>
          <div className="form-rows">
            <div className="form-rows-title">
              <h2>Other info</h2>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="eventName">Event name</label>
                <IconInput Placeholder={"Event name"} Id={"eventName"} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="eventDescription">Event Description</label>
                <textarea
                  rows={6}
                  className="text-area"
                  placeholder="Write a small description for your event..."
                  id={"eventDescription"}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="endDate">Start date</label>
                <IconInput
                  Id={"startDate"}
                  name={"startDate"}
                  Type={"date"}
                  Padding={".5rem"}
                  FontSize={"1.1rem"}
                />
              </div>
              <div className="form-group">
                <label htmlFor="endDate">End date</label>
                <IconInput
                  Id={"endDate"}
                  name={"endDate"}
                  Type={"date"}
                  Padding={".5rem"}
                  FontSize={"1.1rem"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="horizontal-line"></div>
        <div className="footer">
          <div className="section">
            <button
              onClick={navigateToAddProgram}
              className="btn add-program-btn"
            >
              <FontAwesomeIcon icon={faCalendarDays} />
              <span>ADD PROGRAM</span>
            </button>
          </div>
          <div className="section">
            <button type="submit" className="btn submit-btn">
              SUMBIT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddEvent;
