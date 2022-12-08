import React from "react";
import { ImgToolSettings } from "./ImgtoolSetting";
import { useNode } from "@craftjs/core";

const defaultProps = {
  padding: ["0", "0", "0", "0"],
  margin: ["0", "0", "0", "0"],
  width: "100%",
  height: "200px",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
};
const initPicture =
  "https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg";

export const ImgTool = (props) => {
  const {
    connectors: { connect },
  } = useNode((node) => ({ selected: node.events.selected }));
  props = {
    ...defaultProps,
    ...props,
  };
  const {
    width,
    height,
    padding,
    margin,
    children,
    picture,
    flexDirection,
    justifyContent,
    alignItems,
  } = props;

  return (
    <table
      ref={connect}
      style={{
        width: "100%",
        borderCollapse: "collapse",
        borderSpacing: "0",
        margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
      }}
    >
      <tbody>
        <tr
          style={{
            width,
            height,
            backgroundImage: `url(${picture ? picture : initPicture})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            position: "relative",
          }}
        >
          <td
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: "0",
              left: "0",
              padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`,
              display: "flex",
              flexDirection,
              justifyContent,
              alignItems,
              alignContent: "center",
            }}
          >
            {children}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

ImgTool.craft = {
  displayName: "Background Img",
  props: defaultProps,
  rules: {
    canDrag: () => true,
  },
  related: {
    toolbar: ImgToolSettings,
  },
};
