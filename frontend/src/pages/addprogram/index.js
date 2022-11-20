import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ActivityModal } from "../../components/modals";
import "./addprogram.css";

export const AddProgram = (props) => {
  const [days, setDays] = useState(null);
  const [isLoadingDays, setIsLoadingDays] = useState(true);
  const [program, setProgram] = useState(null);

  // const nbrDays =
  const location = useLocation();

  useEffect(() => {
    setProgram(programInit(location.state.nbrDays));
    setIsLoadingDays(false);
  }, []);

  const programInit = (nbrDays) => {
    const daySchema = (index) => {
      return { number: index, activities: [] };
    };

    let programDays = [];
    for (let i = 0; i < nbrDays; i++) {
      programDays.push(daySchema(i + 1));
    }

    setDays(programDays);

    return {
      nbrDays: nbrDays,
      days: programDays,
    };
  };

  const Day = (props) => {
    const [day, setDay] = useState(props.Day);

    const removeActivity = (index) => {
      let activities = day.activities;
      activities.splice(index, 1);
      setDay({ ...day, activities: activities });
      setProgram({
      })
    };

    const addActivity = (activity) => {
      setDay({
        ...day,
        activities: [...day.activities, activity],
      });
    };

    return (
      <div className="day-wrapper">
        <div className="day-header">
          <h2>Day {props.Day.number}</h2>
          <ActivityModal AddActivity={addActivity} />
        </div>
        <div className="day-activities">
          {props.Day.activities.map((activity, index) => {
            return (
              <div
                key={index + activity.name}
                className="activity-outer-wrapper"
              >
                <Activity
                  RemoveActivity={removeActivity}
                  DayId={props.Day.id}
                  ActivityIndex={index}
                  Activity={activity}
                />
                {day.activities.length === index + 1 ? null : (
                  <div
                    style={{ backgroundColor: "var(--secondary)" }}
                    className="horizontal-line"
                  ></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const Activity = (props) => {
    return (
      <div className="activity-wrapper">
        <div className="activity-header">
          <h3>{props.Activity.name}</h3>
          <div className="activity-actions">
            <button className="btn btn-edit">
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <ActivityModal Hidden={true} />
            <button
              onClick={() => props.RemoveActivity(props.ActivityIndex)}
              className="btn btn-delete"
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
        <div className="description">
          <p>{props.Activity.description}</p>
        </div>
        <div className="activity-footer">
          <p className="time">
            <span className="time-text">Start hour : </span>
            {props.Activity.startHour}
          </p>
          <p className="time">
            <span className="time-text">End Hour : </span>
            {props.Activity.endHour}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="page-wrapper add-program-wrapper">
      <div className="content">
        <h1>EVENT PROGRAM</h1>
        <div className="horizontal-line"></div>
        <div className="days-list">
          {!isLoadingDays
            ? program.days.map((day, index) => {
                return <Day key={index + "day"} Day={day}></Day>;
              })
            : null}
        </div>
        <div className="horizontal-line"></div>
        <div className="footer">
          <button className="btn btn-save-program">SAVE</button>
        </div>
      </div>
    </div>
  );
};
