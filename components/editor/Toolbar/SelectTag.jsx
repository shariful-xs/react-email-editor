import React from "react";

const SelectTag = ({ title, value, onchange }) => {
  const selectTags = [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "p",
    "b",
    "i",
    "span",
  ];

  return (
    <>
      <label className="text-sm" htmlFor="selectTag">
        {title}
      </label>
      <select
        style={{
          width: "100%",
          marginTop: "8px",
          border: "1px solid #C8C8C8",
          padding: "4px 6px",
          borderRadius: "5px",
          outline: "none",
        }}
        value={value}
        onChange={(event) => onchange(event.target.value)}
      >
        {selectTags.map((value, index) => (
          <option key={index} value={value}>
            {value}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectTag;
