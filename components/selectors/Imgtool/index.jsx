import React, { useState } from "react";
import FileUpload from "react-material-file-upload";

import { ImgToolSettings } from "./ImgtoolSetting";
import { useDispatch, useSelector } from "react-redux";
import { setPicture } from "../../../rtk/features/picture/pictureSlice";

import { Resizer } from "../Resizer";

const defaultProps = {
  padding: ["0", "0", "0", "0"],
  margin: ["0", "0", "0", "0"],
  width: "100%",
  height: "auto",
};

export const ImgTool = (props) => {
  const dispatch = useDispatch();
  const file = useSelector((state) => state.picutre.file);

  props = {
    ...defaultProps,
    ...props,
  };
  const { padding, margin, children } = props;
  //file upload handler
  const handleFileUpload = (files) => {
    const newFile = URL.createObjectURL(files[0]);
    dispatch(setPicture(newFile));
  };

  //checking height
  const containerHeight = children ? "100%" : "200px";

  return (
    <Resizer propKey={{ width: "width", height: "height" }}>
      <div
        style={{
          width: "100%",
          height: containerHeight,
          backgroundImage: `url(${file})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`,
          margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
        }}
      >
        {!file && (
          <div
            style={{
              width: "310px",
              height: "200px",
              margin: "0 auto",
            }}
          >
            <FileUpload onChange={handleFileUpload} />
          </div>
        )}
        {children}
      </div>
    </Resizer>
  );
};

ImgTool.craft = {
  displayName: "Img Tool",
  props: defaultProps,
  rules: {
    canDrag: () => true,
  },
  related: {
    toolbar: ImgToolSettings,
  },
};
