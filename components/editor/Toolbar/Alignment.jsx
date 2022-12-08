import React, { useState } from "react";

import InputAlignment from "./InputAlignment";
import { useNode } from "@craftjs/core";

const Alignment = ({ title, propsName, defaultValue, options }) => {
  const {
    actions: { setProp },
  } = useNode();

  const [inputValue, setInputValue] = useState(defaultValue || "");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setProp((props) => (props[propsName] = event.target.value));
  };

  return (
    <div
      style={{
        marginTop: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <label htmlFor="alignment">{title || ""}</label>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {options?.map((item, index) => (
            <InputAlignment
              checkValue={inputValue}
              onChange={handleInputChange}
              key={index}
              {...item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alignment;
