import React from "react";

const InputBox = ({ title, value, onChange }) => {
  return (
    <div>
      <label
        style={{
          marginBottom: "0.5rem",
        }}
        className="text-sm"
        htmlFor="inputBox"
      >
        {title}
      </label>
      <input
        style={{
          width: "5rem",
          outline: 0,
        }}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border border-1 rounded-md px-2 block"
        id="inputBox"
        type="number"
      />
    </div>
  );
};

export default InputBox;
