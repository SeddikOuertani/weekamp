import React from "react";
import EventsFilter from "../../components/eventsfilter";
import "./addevent.style.css";

const AddEvent = (props) => {
  return <div className="add-event-wrapper page-wrapper">
    <div className="aside-wrapper">
      <EventsFilter/>
    </div>
    <div className="events-wrapper">
    </div>
  </div>;
};

export default AddEvent;
