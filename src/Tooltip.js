import React from "react";

const Tooltip = (props) => {
  return <div className={props.position}>{props.text}</div>;
};

export default Tooltip;
