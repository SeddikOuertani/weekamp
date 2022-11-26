import React, { useState, CSSProperties } from "react";
import { BeatLoader } from "react-spinners";

const override = {
  display: "block",
  borderColor: "red",
};

export const DotSpinner = (props) => {
  const [color, setColor] = useState(props.Color);
  return (
    <BeatLoader
      color={color}
      loading={props.Loading}
      cssOverride={override}
      size={props.Size}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};
