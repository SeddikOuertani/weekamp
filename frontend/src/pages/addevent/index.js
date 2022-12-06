import { faCalendarDays, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import IconInput from "../../components/iconinput";
import { NotificationModel } from "../../components/modals";
import { getCampsites } from "../../store/slices/campsite.slice";
import { addEvent } from "../../store/slices/event.slice";
import { checkFormErrors, compareDates, extractFormBody } from "../../utils";
import "./addevent.style.css";

const AddEvent = (props) => {
  const dispatch = useDispatch();

  const [program, setProgram] = useState(null);
  const [isDatesValid, setIsDatesValid] = useState(false);

  const location = useLocation();

  useEffect(() => {
    dispatch(getCampsites());
    if (location.state && location.state.program && location.state.eventForm) {
      setProgram(location.state.program);
      setEventForm(location.state.eventForm);
    }
  }, []);

  const loading = useSelector((state) => state.campsites.campsitesLoading);
  const campsites = useSelector((state) => state.campsites.campsites);
  const addEventPending = useSelector((state) => state.events.addEventLoading);
  const addEventStatus = useSelector((state) => state.events.addEventStatus);

  const navigate = useNavigate();

  const eventFormSchema = {
    name: {
      required: true,
      empty: true,
      value: null,
    },
    campsiteId: {
      required: true,
      empty: true,
      value: null,
    },
    description: {
      required: true,
      empty: true,
      value: null,
    },
    startDate: {
      required: true,
      empty: true,
      value: null,
    },
    endDate: {
      required: true,
      empty: true,
      value: null,
    },
  };

  const [isFormValid, setIsFormValid] = useState(true);
  const [eventForm, setEventForm] = useState(eventFormSchema);
  const [notifModalOpen, setNotifModalOpen] = useState(false);
  const [notifModalText, setNotifModalText] = useState("");

  const onChangeHandler = (e) => {
    if (e.target.value.length > 0) {
      setEventForm({
        ...eventForm,
        [e.target.name]: {
          ...eventForm[e.target.name],
          value: e.target.value,
          empty: false,
        },
      });
    } else {
      setEventForm({
        ...eventForm,
        [e.target.name]: {
          ...eventForm[e.target.name],
          value: e.target.value,
          empty: true,
        },
      });
    }

    console.log({
      ...eventForm,
      [e.target.name]: {
        ...eventForm[e.target.name],
        value: e.target.value,
      },
    });
  };

  useEffect(() => {
    if (
      eventForm.startDate.value !== null &&
      eventForm.endDate.value !== null
    ) {
      if (compareDates(eventForm.startDate.value, eventForm.endDate.value)) {
        setIsDatesValid(true);
      } else {
        setIsDatesValid(false);
      }
    }
  }, [eventForm.startDate, eventForm.endDate]);

  useEffect(() => {
    if (["rejected", "fulfilled"].includes(addEventStatus)) {
      if (addEventStatus === "fulfilled") {
        setNotifModalText(
          "Event added successfully, you will be redirected to the events page in a bit"
        );
      } else {
        setNotifModalText(
          "Failed to add event, please check your form for errors"
        );
      }
      setTimeout(() => {
        setNotifModalOpen(false);
        navigate("/events");
      }, 3000);
    }
  }, [addEventStatus]);

  const launchNotifModal = () => {
    setNotifModalOpen(true);
  };

  const submitEvent = (e) => {
    e.preventDefault();
    if (checkFormErrors(eventForm) === false) {
      setIsFormValid(false);
      return;
    }

    let formBody = extractFormBody(eventForm);
    console.log(formBody);
    if (program !== null) {
      formBody.program = program;
    }

    dispatch(addEvent());
    launchNotifModal();

    return;
  };

  const navigateToAddProgram = () => {
    let nbrDays =
      (new Date(eventForm.endDate.value) -
        new Date(eventForm.startDate.value)) /
      (1000 * 3600 * 24);
    console.log(eventForm.endDate.value);
    console.log(nbrDays);
    navigate("/events/addevent/addprogram", { state: { nbrDays, eventForm } });
  };

  const RequiredErrorField = () => {
    return <small className="required">this field is required</small>;
  };

  const DateError = () => {
    return (
      <small className="start-date-error">
        the starting date should be smaller than the ending date
      </small>
    );
  };

  return (
    <div className="add-event-wrapper page-wrapper">
      <NotificationModel
        Open={notifModalOpen}
        Title={"Adding event"}
        LoadingParam={addEventPending}
        ReqDesc={`Request ${addEventStatus}`}
        Text={notifModalText}
      />

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
                  Value={
                    location.state && eventForm.name.value
                      ? eventForm.name.value
                      : ""
                  }
                  OnChange={onChangeHandler}
                  Name={"name"}
                  Placeholder={"Event name"}
                  Id={"eventName"}
                />
                {!isFormValid ? (
                  <div className="errors">
                    {eventForm.name.empty ? <RequiredErrorField /> : null}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="campsite">Campsite</label>
                <select
                  defaultValue={
                    eventForm.campsiteId.value ? eventForm.campsiteId.value : ""
                  }
                  onChange={onChangeHandler}
                  name={"campsiteId"}
                  className="select"
                  id={"campsite"}
                >
                  <option hidden> -- Choose a campsite -- </option>
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
                {!isFormValid ? (
                  <div className="errors">
                    {eventForm.campsiteId.empty ? <RequiredErrorField /> : null}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="eventDescription">Event Description</label>
                <textarea
                  onChange={onChangeHandler}
                  value={
                    location.state && eventForm.description.value
                      ? eventForm.description.value
                      : ""
                  }
                  name="description"
                  rows={6}
                  className="text-area"
                  placeholder="Write a small description for your event..."
                  id={"eventDescription"}
                />
                {!isFormValid ? (
                  <div className="errors">
                    {eventForm.description.empty ? (
                      <RequiredErrorField />
                    ) : null}
                  </div>
                ) : null}
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
                {!isFormValid ? (
                  <div className="errors">
                    {eventForm.startDate.empty ? <RequiredErrorField /> : null}
                  </div>
                ) : null}
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
                {!isFormValid ? (
                  <div className="errors">
                    {eventForm.endDate.empty ? <RequiredErrorField /> : null}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div className="horizontal-line"></div>
        <div className="footer">
          <div className="section">
            <button
              disabled={isDatesValid ? false : true}
              onClick={navigateToAddProgram}
              className={`btn add-program-btn ${
                isDatesValid ? "" : "disabled"
              }`}
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
