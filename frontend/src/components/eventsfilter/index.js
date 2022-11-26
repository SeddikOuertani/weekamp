import React, { useState } from "react";
import IconInput from "../iconinput";
import "./eventsfilter.style.css";
import { faFilter, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EventsFilter = (props) => {
  const [headerSearch, setHeaderSearch] = useState(null);
  const [filterForm, setFilterForm] = useState(null);

  const onHeaderChange = (e) => {
    setHeaderSearch(e.target.value);
  };

  const onChangeForm = (e) => {
    setFilterForm({
      ...filterForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    console.log(filterForm)
  }

  return (
    <div className="events-filter">
      <div className="filter-header">
        <IconInput
          name="headerSearch"
          OnChange={onHeaderChange}
          Placeholder={"Search something ..."}
          Icon={faSearch}
          Padding={"1rem"}
          FontSize={"1.5rem"}
        />
      </div>
      <div className="horizontal-line" />
      <form onSubmit={handleOnSubmit} className="filter-body">
        <h2>Advanced search</h2>
        <div className="form-group">
          <label htmlFor="campsiteName">Campsite name</label>

          <IconInput
            Id={"campsiteName"}
            name="campsite"
            OnChange={onChangeForm}
            Placeholder={"Campsite name"}
            Padding={".5rem"}
            FontSize={"1.1rem"}
          />
        </div>
        
        {/* Campsite type -- select -- */}

        <div className="form-group">
          <label htmlFor="numberParticipants">Number of participants</label>
          <IconInput
            Id={"numberParticipants"}
            name={"numberParticipants"}
            Type={"number"}
            OnChange={onChangeForm}
            Placeholder={"Participants number"}
            Padding={".5rem"}
            FontSize={"1.1rem"}
          />
        </div>

        <div className="form-group">
          <label htmlFor="startDate">Start date</label>
          <IconInput
            Id={"startDate"}
            name={"startDate"}
            Type={"date"}
            OnChange={onChangeForm}
            Placeholder={"Start date"}
            Padding={".5rem"}
            FontSize={"1.1rem"}
          />
        </div>

        <div className="form-group">
          <label htmlFor="startDate">End date</label>
          <IconInput
            Id={"endDate"}
            name={"endDate"}
            Type={"date"}
            OnChange={onChangeForm}
            Placeholder={"End type"}
            Padding={".5rem"}
            FontSize={"1.1rem"}
          />
        </div>

        <div className="form-group">
          <button type={"submit"} className="btn filter-btn">
            <FontAwesomeIcon icon={faFilter} />
            <span>FILTER</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventsFilter;
