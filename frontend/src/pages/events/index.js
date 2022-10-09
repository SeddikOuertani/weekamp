import React from "react";
import EventsFilter from "../../components/eventsfilter";
import "./events.style.css";

const Events = (props) => {
  return <div className="events-wrapper">
    <div className="aside-wrapper">
      <EventsFilter/>
    </div>
    <div className="events-wrapper">
    </div>
  </div>;
};

export default Events;
