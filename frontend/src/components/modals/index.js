import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Modal from "react-modal";
import IconInput from "../iconinput";
import "./addactivity.modal.css";

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

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    //LOGIC
    console.log("perform logic here");

    closeModal();
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
            <form onSubmit={submitHandler} className="form">
              <div className="form-rows">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="eventName">Activity name</label>
                    <IconInput
                      Placeholder={"What's your activity's name"}
                      Id={"activityName"}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="eventName">Activity description</label>
                    <textarea
                      rows={4}
                      className="text-area"
                      placeholder={"write a small description"}
                      id={"eventName"}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="startTime">Start time</label>
                    <IconInput
                      Type={"time"}
                      Placeholder={"Starting hour"}
                      Id={"startTime"}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="endTime">End time</label>
                    <IconInput
                      Type={"time"}
                      Placeholder={"Ending hour"}
                      Id={"endTime"}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="horizontal-line"></div>
          <div className="modal-footer">
            <button className="btn btn-save" type="submit">
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
