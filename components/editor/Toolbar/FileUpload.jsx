import React, { useRef } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setPicture } from "../../../rtk/features/picture/pictureSlice";
const FileUpload = () => {
  const inputFieldRef = useRef(null);
  const dispatch = useDispatch();

  //handle input file changes
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const newFile = URL.createObjectURL(file);
    dispatch(setPicture(newFile));
  };
  //   upload button work on handle file change funcition
  const handleUploadBtn = () => {
    inputFieldRef.current.click();
  };
  return (
    <div
      style={{
        width: "250px",
        height: "100px",
        textAlign: "center",
        margin: "0 auto",
        paddingTop: "8px",
        backgroundColor: "white",
        border: "4px dotted #E0E0E0",
      }}
    >
      <div
        style={{
          width: "100%",
          textAlign: "center",
        }}
      >
        <AiOutlineCloudUpload
          style={{
            fontSize: "32px",
            color: "green",
            margin: "0 auto",
          }}
        />
      </div>
      <input
        ref={inputFieldRef}
        onChange={handleFileUpload}
        type="file"
        style={{
          display: "none",
        }}
      />

      <button
        style={{
          display: "inline-block",
          border: "1px solid #E0E0E0",
          marginTop: "6px",
          padding: "4px 10px",
          borderRadius: "4px",
        }}
        onClick={handleUploadBtn}
      >
        Upload File
      </button>
    </div>
  );
};

export default FileUpload;
