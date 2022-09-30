import React from "react";
import "./addevent.style.css";

const AddEvent = (props) => {
  return (
    <div className="add-event-wrapper page-wrapper">
      <div className="page-header">
        <h1 className="page-title">Create a new camping event</h1>
        <p className="page-description">
          Fill the form below with the camping event details to help it gain
          more recognition
        </p>
      </div>
      <div className="page-body">
        <form>
          <div className="form-group">
            <label htmlFor="title">Event title</label>
            <input
              type="text"
              className="input"
              id="title"
              name="title"
              placeholder="Event title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="campsite">Campsite</label>
            <select className="input" id="campsite" name="campsite">
              <option hidden>Select campsite</option>
              <option value="capangela">Cap Angela</option>
              <option value="capsirat">Cap Sirat</option>
              <option value="aindemous">Ain demous</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="period">Date Period</label>
            <div id="period" className="date-column">
              <div className="date-row">
                <span className="sub-label">Start date</span>
                <span className="sub-label">End date </span>
              </div>
              <div className="date-row">
                <input
                  type={"date"}
                  className="input"
                  id="startDate"
                  name="title"
                  placeholder="Event title"
                />

                <input
                  className="input"
                  id="endDate"
                  name="title"
                  type={"date"}
                  placeholder="Event title"
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              className="text-area"
              placeholder="For any small additional input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="add-schedule">Want to add a schedule ?</label>
            <button id="add-schedule" className="buttona">
              Click here
            </button>
          </div>

          <button type="submit" className="submit">
            Publish event
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;
