import React from "react";
import { ImgToolSettings } from "./ImgtoolSetting";
import FileUpload from "../../editor/Toolbar/FileUpload";
import { useNode } from "@craftjs/core";

const defaultProps = {
  padding: ["0", "0", "0", "0"],
  margin: ["0", "0", "0", "0"],
  width: "500px",
  height: "200px",
};
const initPicture =
  "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg";

export const ImgTool = (props) => {
  const {
    connectors: { connect },
  } = useNode((node) => ({ selected: node.events.selected }));
  props = {
    ...defaultProps,
    ...props,
  };
  const { width, height, padding, margin, children, picture } = props;

  return (
    <div
      ref={connect}
      style={{
        minWidth: `${width}`,
        maxHeight: `${height}`,
        minHeight: `${height}`,
        backgroundImage: `url(${picture ? picture : initPicture})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`,
        margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
      }}
    >
      {!picture && !children && <FileUpload />}
      {children}
    </div>
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

{
  /* */
}
