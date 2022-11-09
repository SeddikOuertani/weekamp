import React from "react";
import EventElement from "../../components/eventelement";
import EventsFilter from "../../components/eventsfilter";
import "./events.style.css";

const Events = (props) => {


  
  return (
    <div className="events-wrapper">
      <div className="aside-wrapper">
        <EventsFilter />
      </div>
      <div className="events-list">
        <EventElement/>
        <EventElement/>
        <EventElement/>
        <EventElement/>
      </div>
    </div>
  );
};

export default Events;
