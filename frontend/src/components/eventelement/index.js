import {
  faArrowRight,
  faFeatherPointed,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EventImage from "../../assets/images/camping_grounds2.jpg";
import { getCampsites } from "../../store/slices/campsite.slice";
import { DotSpinner } from "../spinners";
import "./eventelement.style.css";

const EventElement = (props) => {
  let [loading, setLoading] = useState(true);
  const [currentCampsite, setCurrentCampsite] = useState(null);

  const dispatch = useDispatch();

  const campsites = useSelector((state) => state.campsites.campsites);
  loading = useSelector((state) => state.campsites.campsitesLoading);

  useEffect(() => {
    dispatch(getCampsites());
  }, []);

  useEffect(() => {
    if (!loading) {
      let cc = campsites.find(
        (campsite) => campsite._id === props.Event.campsiteId
      );
      setCurrentCampsite(cc);
    }
  }, [loading]);

  return (
    <div className="event-element-wrapper">
      <div className="image-wrapper">
        <img src={EventImage} alt="event" />
      </div>
      <div className="info">
        <div className="header">
          <h2 className="title">{props.Event.name}</h2>
          <div className="header-end">
            <p className="campsite">
              {currentCampsite ? (
                currentCampsite.name
              ) : (
                <DotSpinner
                  Color={"var(--primary)"}
                  Size={30}
                  Loading={loading}
                />
              )}
            </p>
            <button className="btn join-btn">
              <FontAwesomeIcon icon={faFeatherPointed} />
              <span>Join</span>
            </button>
          </div>
        </div>
        <div className="description-wrapper">
          <p className="description">{props.Event.description}</p>
        </div>
        <div className="footer">
          <div className="section">
            <p className="date-wrapper">
              from : <span className="date">{props.Event.startDate}</span>
            </p>
            <p className="date-wrapper">
              to : <span className="date">{props.Event.endDate}</span>
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
