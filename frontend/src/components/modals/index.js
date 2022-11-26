import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Modal from "react-modal";
import IconInput from "../iconinput";
import { DotSpinner } from "../spinners";
import "./addactivity.modal.css";
import "./notification.modal.css";

const customStyles = {
  content: {
    top: "50px",
    margin: "auto",
    width: "60%",
    height: "fit-content",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.4)",
  },
};

export const ActivityModal = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [activityForm, setActivityForm] = useState(null);
  const [isFormValid, setIsFormValid] = useState(true);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const onChangeHandler = (e) => {
    setActivityForm({
      ...activityForm,
      [e.target.name]: e.target.value,
    });

    console.log({
      ...activityForm,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (
      !activityForm.name ||
      !activityForm.description ||
      !activityForm.startTime ||
      !activityForm.endTime
    ) {
      setIsFormValid(false);
      console.log("form isn't valid");
      return;
    } else {
      setIsFormValid(true);
      props.AddActivity(activityForm, props.DayNumber);
      closeModal();
    }
  };

  return (
    <div
      style={{ display: props.Hidden ? "none" : "block" }}
      className="add-activity-modal"
    >
      <button onClick={openModal} className="btn add-activity-btn">
        <FontAwesomeIcon icon={faPlus} />
        <span>ADD ACTIVITY</span>
      </button>
      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modal-inner-wrapper">
          <div className="modal-header">
            <h2>ADD ACTIVITY</h2>
          </div>
          <div className="horizontal-line"></div>
          <div className="modal-content">
            <form className="form">
              <div className="form-rows">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="eventName">Activity name</label>
                    <IconInput
                      OnChange={onChangeHandler}
                      Placeholder={"What's your activity's name"}
                      Id={"activityName"}
                      Name={"name"}
                    />
                    <div className="errors">
                      {!isFormValid && !activityForm.name ? (
                        <small>This field is required</small>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="eventName">Activity description</label>
                    <textarea
                      onChange={onChangeHandler}
                      rows={4}
                      className="text-area"
                      name="description"
                      placeholder={"write a small description"}
                      id={"eventName"}
                    />
                    <div className="errors">
                      {!isFormValid && !activityForm.description ? (
                        <small>This field is required</small>
                      ) : null}
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="startTime">Start time</label>
                    <IconInput
                      OnChange={onChangeHandler}
                      Type={"time"}
                      Name={"startTime"}
                      Placeholder={"Starting hour"}
                      Id={"startTime"}
                    />
                    <div className="errors">
                      {!isFormValid && !activityForm.endTime ? (
                        <small>This field is required</small>
                      ) : null}
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="endTime">End time</label>
                    <IconInput
                      OnChange={onChangeHandler}
                      Type={"time"}
                      Name={"endTime"}
                      Placeholder={"Ending hour"}
                      Id={"endTime"}
                    />
                    <div className="errors">
                      {!isFormValid && !activityForm.endTime ? (
                        <small>This field is required</small>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="horizontal-line"></div>
          <div className="modal-footer">
            <button className="btn btn-save" onClick={submitHandler}>
              SAVE
            </button>
            <button className="btn btn-cancel" onClick={closeModal}>
              CANCEL
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export const NotificationModel = (props) => {
  return (
    <div className="notification-modal-wrapper">
      <Modal
        isOpen={props.Open}
        ariaHideApp={false}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modal-inner-wrapper">
          <div className="header">
            <h3>{props.Title}</h3>
          </div>
          <div className="horizontal-line" />
          <div className="content">
            <p className="text">
              {props.ReqDesc}
              {props.LoadingParam ? (
                <span>
                  <DotSpinner
                    Loading={props.LoadingParam ? props.LoadingParam : true}
                    Size={props.SpinnerSize}
                  />
                </span>
              ) : null}
              {props.Text ? <span>, {props.Text}</span> : null}
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};
