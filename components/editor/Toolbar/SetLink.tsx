import React from "react";
import { useDispatch } from "react-redux";
import { setUrl } from "../../../rtk/features/button/buttonSlice";

const SetLink = () => {
  const dispatch = useDispatch();
  return (
    <>
      <label className="text-sm" htmlFor="setLinks">
        Set Link
      </label>
      <input
        onBlur={(e) => dispatch(setUrl(e.target.value))}
        style={{
          width: "230px",
          marginTop: "8px",
          outline: "none",
        }}
        className="block border border-1 px-2 py-1 rounded-md "
        type="text"
      />
    </>
  );
};

export default SetLink;
