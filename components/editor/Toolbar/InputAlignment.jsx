import React from "react";
import { Tooltip } from "@material-ui/core";
const InputAlignment = ({
  onChange,
  value,
  name,
  label,
  icon,
  toolTip,
  checkValue,
}) => {
  return (
    <div
      className="inputControl"
      style={{
        backgroundColor: value === checkValue ? "#80808079" : "transparent",
      }}
    >
      <label htmlFor={label}>{icon}</label>
      <Tooltip title={toolTip} placement="top-start">
        <input onChange={onChange} type="radio" name={name} value={value} />
      </Tooltip>
    </div>
  );
};

export default InputAlignment;
