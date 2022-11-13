import React, { useEffect } from "react";
import EventElement from "../../components/eventelement";
import EventsFilter from "../../components/eventsfilter";
import { useDispatch, useSelector } from "react-redux";
import "./events.style.css";
import { getEventList } from "../../store/slices/event.slice";
import { getCampsites } from "../../store/slices/campsite.slice";
import { DotSpinner } from "../../components/spinners";

const Events = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEventList());
  }, []);

  const events = useSelector((state) => state.events.events);
  const loading = useSelector((state) => state.events.eventsLoading);

  return (
    <div className="events-wrapper">
      <div className="aside-wrapper">
        <EventsFilter />
      </div>
      <div className="events-list">
        {!loading ? (
          events.map((event, index) => {
            return <EventElement key={`event-elem${index}`} Event={event} />;
          })
        ) : (
          <h2>
            <DotSpinner
              Color={"var(--secondary-light)"}
              Size={20}
              Loading={loading}
            />
          </h2>
        )}
      </div>
    </div>
  );
};

export default Events;
