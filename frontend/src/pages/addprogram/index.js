import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ActivityModal } from "../../components/modals";
import "./addprogram.css";

export const AddProgram = (props) => {
  const [isLoadingDays, setIsLoadingDays] = useState(true);
  const [program, setProgram] = useState(null);

  // const nbrDays =
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setProgram(programInit(location.state.nbrDays));
    setIsLoadingDays(false);
  }, []);

  useEffect(() => {
    console.log(program);
  }, [program]);

  const programInit = (nbrDays) => {
    const daySchema = (index) => {
      return { number: index, activities: [] };
    };

    let programDays = [];
    for (let i = 0; i < nbrDays; i++) {
      programDays.push(daySchema(i + 1));
    }

    console.log({
      nbrDays: nbrDays,
      days: programDays,
    });
    return {
      nbrDays: nbrDays,
      days: programDays,
    };
  };

  const saveAndGoBackToEventForm = () => {
    navigate("/events/addevent", {
      state: { program, eventForm: location.state.eventForm },
    });
  };

  const Day = (props) => {
    const [day, setDay] = useState(props.Day);
    const removeActivity = (index) => {
      let activities = day.activities;
      activities.splice(index, 1);
      
      let programDay = {
        ...program.days[day.number - 1],
        activities: activities,
      };

      let programDays = program.days;
      programDays[day.number - 1] = programDay;
      setProgram({
        ...program,
        days: programDays,
      });
    };

    const addActivity = (activity, dayNumber) => {
      let programDays = program.days;
      let activityDay = programDays.find((day) => day.number === dayNumber);
      activityDay.activities = [...day.activities, activity];
      programDays[activityDay.number - 1] = activityDay;
      setProgram({ ...program, days: programDays });
    };

    return (
      <div className="day-wrapper">
        <div className="day-header">
          <h2>Day {props.Day.number}</h2>
          <ActivityModal
            DayNumber={props.Day.number}
            AddActivity={addActivity}
          />
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
                  DayNumber={props.Day.number}
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
            <span className="time-text">
              Start hour : {props.Activity.startTime}{" "}
            </span>
            {props.Activity.startHour}
          </p>
          <p className="time">
            <span className="time-text">
              End Hour : {props.Activity.endTime}
            </span>
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
          <button
            onClick={saveAndGoBackToEventForm}
            className="btn btn-save-program"
          >
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
};
