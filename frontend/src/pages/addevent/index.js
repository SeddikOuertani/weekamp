import { faCalendarDays, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import IconInput from "../../components/iconinput";
import { getCampsites } from "../../store/slices/campsite.slice";
import { compareDates } from "../../utils";
import "./addevent.style.css";

const AddEvent = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCampsites());
  }, []);

  const loading = useSelector((state) => state.campsites.campsitesLoading);
  const campsites = useSelector((state) => state.campsites.campsites);

  const navigate = useNavigate();

  const [eventForm, setEventForm] = useState(null);
  const [checkErrors, setCheckErrors] = useState(false);

  const onChangeHandler = (e) => {
    setEventForm({
      ...eventForm,
      [e.target.name]: e.target.value,
    });

    if (e.target.name === "startDate" || e.target.name === "endDate") {
    }

    console.log({
      ...eventForm,
      [e.target.name]: e.target.value,
    });
  };

  const submitEvent = (e) => {
    e.preventDefault();
    if(compareDates(eventForm.startDate, eventForm.endDate) === false){
      setCheckErrors(true);
      return;
    }
  };

  const navigateToAddProgram = () => {
    navigate("/events/addevent/addprogram");
  };

  const RequiredErrorField = () => {
    return <small className="required">this field is required</small>;
  };
  const StartDateError = () => {
    return (
      <small className="start-date-error">
        the starting date should be smaller than the ending date
      </small>
    );
  };
  const EndDateError = () => {
    return (
      <small className="end-date-error">
        the ending date should be bigger than the starting date
      </small>
    );
  };

  return (
    <div className="add-event-wrapper page-wrapper">
      <form onSubmit={submitEvent} className="form">
        <div className="header">
          <h1 className="title">Add event</h1>
        </div>
        <div className="horizontal-line"></div>
        <div className="body">
          <div className="form-group">
            <label htmlFor="formImage">
              <h2>Choose an image for your event</h2>
            </label>
            <div id="formImage" className="form-image">
              <div className="add-event-icon-wrapper">
                <FontAwesomeIcon className="add-event-icon" icon={faPlus} />
              </div>
            </div>
          </div>
          <div className="horizontal-line"></div>
          <div className="form-rows">
            <div className="form-rows-title">
              <h2>Other info</h2>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="eventName">Event name</label>
                <IconInput
                  OnChange={onChangeHandler}
                  Name={"name"}
                  Placeholder={"Event name"}
                  Id={"eventName"}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="campsite">Campsite</label>
                <select
                  defaultValue={""}
                  onChange={onChangeHandler}
                  name={"campsiteId"}
                  className="select"
                  id={"campsite"}
                >
                  <option hidden>-- Choose a campsite --</option>
                  {!loading ? (
                    campsites.map((campsite, index) => (
                      <option key={campsite.name + index} value={campsite._id}>
                        {campsite.name}
                      </option>
                    ))
                  ) : (
                    <option>loading</option>
                  )}
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="eventDescription">Event Description</label>
                <textarea
                  onChange={onChangeHandler}
                  name="description"
                  rows={6}
                  className="text-area"
                  placeholder="Write a small description for your event..."
                  id={"eventDescription"}
                />
                <div className="errors description-errors">
                  <small className="required">
                    A tiny description for your event is required
                  </small>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="endDate">Start date</label>
                <IconInput
                  OnChange={onChangeHandler}
                  Id={"startDate"}
                  Name={"startDate"}
                  Type={"date"}
                  Padding={".5rem"}
                  FontSize={"1.1rem"}
                />
                <div className="errors start-date-errors">
                    
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="endDate">End date</label>
                <IconInput
                  OnChange={onChangeHandler}
                  Id={"endDate"}
                  Name={"endDate"}
                  Type={"date"}
                  Padding={".5rem"}
                  FontSize={"1.1rem"}
                />
                <div className="errors end-date-errors"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="horizontal-line"></div>
        <div className="footer">
          <div className="section">
            <button
              onClick={navigateToAddProgram}
              className="btn add-program-btn"
            >
              <FontAwesomeIcon icon={faCalendarDays} />
              <span>ADD PROGRAM</span>
            </button>
          </div>
          <div className="section">
            <button type="submit" className="btn submit-btn">
              SUMBIT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddEvent;
