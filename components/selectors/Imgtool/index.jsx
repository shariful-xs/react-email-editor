import React from "react";
import { ImgToolSettings } from "./ImgtoolSetting";
import FileUpload from "../../editor/Toolbar/FileUpload";
import { Resizer } from "../Resizer";
// import { useSelector } from "react-redux";
const defaultProps = {
  padding: ["0", "0", "0", "0"],
  margin: ["0", "0", "0", "0"],
  width: "100%",
  height: "auto",
};

export const ImgTool = (props) => {
  // const file = useSelector((state) => state.picutre.file);

  props = {
    ...defaultProps,
    ...props,
  };
  const { padding, margin, children, picture } = props;

  //checking height
  const containerHeight = children ? "100%" : "200px";
  return (
    <Resizer propKey={{ width: "width", height: "height" }}>
      <div
        style={{
          width: "100%",
          height: containerHeight,
          backgroundImage: `url(${picture})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`,
          margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
        }}
      >
        {!picture && !children && <FileUpload />}
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
