import React, { useState } from "react";
import { urlValidate } from "../../../helpers/validation";
// import { useDispatch } from "react-redux";
// import { setUrl } from "../../../rtk/features/button/buttonSlice";

const SetLink = ({ title, value, onChange }) => {
  // const dispatch = useDispatch();
  const [error, setError] = useState("");
  //  input field value change detect functioon
  const handleInputChange = (event) => {
    const { value } = event.target;
    if (!value) {
      setError("");
      onChange(value);
    } else if (!urlValidate(value)) {
      setError("Please provide  a valid url");
      onChange(value);
    } else {
      setError("");
      onChange(value);
    }
  };

  return (
    <>
      <label className="text-sm" htmlFor="setLinks">
        {title}
      </label>
      <input
        onChange={handleInputChange}
        value={value}
        style={{
          width: "230px",
          marginTop: "8px",
          outline: "none",
        }}
        className="block border border-1 px-2 py-1 rounded-md "
        type="text"
      />
      <p
        style={{
          whiteSpace: "nowrap",
          color: "red",
        }}
      >
        {error && error}
      </p>
    </>
  );
};

export default SetLink;
//  onBlur={(e) => dispatch(setUrl(e.target.value))}
// (e) => onChange(e.target.value)
