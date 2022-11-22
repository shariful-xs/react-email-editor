import { useNode, useEditor } from "@craftjs/core";
import React, { useRef } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { imageValidate } from "../../../helpers/validation";
import { toast } from "react-toastify";

const FileUpload = () => {
  const {
    actions: { setProp },
  } = useNode();

  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const inputFieldRef = useRef(null);

  //handle input file changes
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!imageValidate(file)) {
      toast.error("Please select file like jpg,jpeg,png,gif", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      const newFile = URL.createObjectURL(file);
      setProp((props) => (props.picture = newFile));
    }
  };
  //   upload button work on handle file change funcition
  const handleUploadBtn = () => {
    inputFieldRef.current.click();
  };
  return (
    <div
      style={{
        width: "15.625rem",
        height: "6.25rem",
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
            fontSize: "2rem",
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
        disabled={!enabled}
      />

      <button
        style={{
          display: "inline-block",
          border: "1px solid #E0E0E0",
          marginTop: "0.375rem",
          padding: "0.25rem 0.625rem",
          borderRadius: "0.25rem",
        }}
        onClick={handleUploadBtn}
      >
        Upload File
      </button>
    </div>
  );
};

export default FileUpload;
