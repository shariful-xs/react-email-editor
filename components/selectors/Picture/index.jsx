import React from "react";
import { PictureSettings } from "./PictureSettings";

import { useNode } from "@craftjs/core";

const defaultProps = {
  margin: ["0", "0", "0", "0"],
  width: "100%",
  height: "200px",
};
const initPicture =
  "https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg";

export const Picture = (props) => {
  const {
    connectors: { connect },
  } = useNode((node) => ({ selected: node.events.selected }));
  props = {
    ...defaultProps,
    ...props,
  };
  const { width, height, margin, picture } = props;

  return (
    <table
      ref={connect}
      style={{
        borderCollapse: "collapse",
        width: "100%",
        margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
      }}
    >
      <tbody>
        <tr>
          <td
            style={{
              width,
              height,
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={picture ? picture : initPicture}
              alt=""
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

Picture.craft = {
  displayName: "Picture",
  props: defaultProps,
  rules: {
    canDrag: () => true,
  },
  related: {
    toolbar: PictureSettings,
  },
};
