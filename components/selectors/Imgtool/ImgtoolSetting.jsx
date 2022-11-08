import React from "react";
import FileUpload from "react-material-file-upload";
import { useDispatch } from "react-redux";
import { setPicture } from "../../../rtk/features/picture/pictureSlice";
import { ToolbarSection, ToolbarItem } from "../../editor";
import { ToolbarRadio } from "../../editor/Toolbar/ToolbarRadio";

export const ImgToolSettings = () => {
  const dispatch = useDispatch();
  const handleFileUpload = (files) => {
    const newFile = URL.createObjectURL(files[0]);
    dispatch(setPicture(newFile));
  };
  return (
    <React.Fragment>
      <ToolbarSection title="Upload">
        <FileUpload onChange={handleFileUpload} />
      </ToolbarSection>
      <ToolbarSection
        title="Dimensions"
        props={["width", "height"]}
        summary={({ width, height }) => {
          return `${width || 0} x ${height || 0}`;
        }}
      />
      <ToolbarSection
        title="Margin"
        props={["margin"]}
        summary={({ margin }) => {
          return `${margin[0] || 0}px ${margin[1] || 0}px ${margin[2] || 0}px ${
            margin[3] || 0
          }px`;
        }}
      >
        <ToolbarItem propKey="margin" index={0} type="slider" label="Top" />
        <ToolbarItem propKey="margin" index={1} type="slider" label="Right" />
        <ToolbarItem propKey="margin" index={2} type="slider" label="Bottom" />
        <ToolbarItem propKey="margin" index={3} type="slider" label="Left" />
      </ToolbarSection>
      <ToolbarSection
        title="Padding"
        props={["padding"]}
        summary={({ padding }) => {
          return `${padding[0] || 0}px ${padding[1] || 0}px ${
            padding[2] || 0
          }px ${padding[3] || 0}px`;
        }}
      >
        <ToolbarItem propKey="padding" index={0} type="slider" label="Top" />
        <ToolbarItem propKey="padding" index={1} type="slider" label="Right" />
        <ToolbarItem propKey="padding" index={2} type="slider" label="Bottom" />
        <ToolbarItem propKey="padding" index={3} type="slider" label="Left" />
      </ToolbarSection>
    </React.Fragment>
  );
};
