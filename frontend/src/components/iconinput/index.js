import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./iconinput.style.css";

const IconInput = (props) => {
  return (
    <div
      id={props.Id}
      style={{ padding: props.Padding }}
      className="icon-input-wrapper"
    >
      {props.Icon ? (
        <div className="icon-wrapper" style={{ fontSize: props.FontSize }}>
          <FontAwesomeIcon icon={props.Icon} />
        </div>
      ) : null}

      <div className="input-wrapper">
        {props.Value ? (
          <input
            value={props.Value ? props.Value : ""}
            style={{ fontSize: props.FontSize }}
            className="input"
            name={props.Name}
            onChange={props.OnChange}
            placeholder={props.Placeholder}
            type={props.Type}
          />
        ) : (
          <input
            style={{ fontSize: props.FontSize }}
            className="input"
            name={props.Name}
            onChange={props.OnChange}
            placeholder={props.Placeholder}
            type={props.Type}
          />
        )}
      </div>
    </div>
  );
};

export default IconInput;
