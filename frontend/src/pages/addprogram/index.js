import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { ActivityModal } from "../../components/modals";
import "./addprogram.css";

export const AddProgram = (props) => {
  const [days, setDays] = useState(null);
  const [isLoadingDays, setIsLoadingDays] = useState(true);

  useEffect(() => {
    setDays([day1, day2]);
    setIsLoadingDays(false);
  }, []);

  const day1 = {
    id: 1,
    activities: [
      {
        id: 1,
        name: "activity1",
        description: "activity 1 descriptuon",
        startHour: "10:00",
        endHour: "15:00",
      },
      {
        id: 2,
        name: "activity2",
        description: "activity 2 descriptuon",
        startHour: "15:30",
        endHour: "16:00",
      },
      {
        id: 3,
        name: "activity3",
        description: "activity 3 descriptuon",
        startHour: "16:30",
        endHour: "17:00",
      },
    ],
  };

  const day2 = {
    id: 2,
    activities: [
      {
        id: 4,
        name: "activity4",
        description: "activity 4 descriptuon",
        startHour: "10:00",
        endHour: "15:00",
      },
      {
        id: 5,
        name: "activity5",
        description: "activity 5 descriptuon",
        startHour: "15:30",
        endHour: "16:00",
      },
      {
        id: 5,
        name: "activity6",
        description: "activity 6 descriptuon",
        startHour: "16:30",
        endHour: "17:00",
      },
    ],
  };

  const Day = (props) => {
    const [day, setDay] = useState(props.Day);

    const removeActivity = (index) => {
      let activities = day.activities;
      activities.splice(index, 1);
      setDay({ ...day, activities: activities });
    };

    return (
      <div className="day-wrapper">
        <div className="day-header">
          <h2>Day 1</h2>
          <ActivityModal />
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
            ? days.map((day, index) => {
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
