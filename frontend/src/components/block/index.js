import React from "react";
import "./block.style.css";

const Block = (props) => {
  return (
    <div ref={props.Ref} className={`block-wrapper${props.Inverted ? " inverted" : ""}`}>
      {props.BgImage ? (
        <img
          className="block-image"
          src={props.BgImage}
          alt="camping_grounds"
        />
      ) : null}
      <div className="block-text">{props.children}</div>
    </div>
  );
};

export default Block;
