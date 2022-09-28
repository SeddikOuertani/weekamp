import React from "react";
import "./addevent.style.css";

const AddEvent = (props) => {
  return (
    <div className="add-event-wrapper">
      <div className="page-header">
        <h1 className="page-title">Create a new camping event</h1>
        <p className="page-description">
          Fill the form below with the camping event details to help it gain
          more recognition
        </p>
      </div>
      <div className="page-body">
        <form className="add-event-form form">
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
            <label htmlFor="campsite">Champsite</label>
            <select className="input" id="campsite" name="campsite">
              <option hidden>Select campsite</option>
              <option value="capangela">Cap Angela</option>
              <option value="capsirat">Cap Sirat</option>
              <option value="aindemous">Ain demous</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="period">Date Period</label>
            <div id="period" className="date-row">
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
          
          <div className="form-group">
            <textarea id="description" name="description" className="text-area" placeholder="For any small additional input"/>
          </div>
          
          <div className="form-group">
            <label htmlFor="add-schedule">Want to add a schedule ?</label>
            <button id="add-schedule" className="buttona">Click here</button>
          </div>

          <button type="submit" className="submit">Publish event</button>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;
