import { useNode } from "@craftjs/core";
import React from "react";
import { FrameContainerSettings } from "./FrameContainerSettings";
const defaultProps = {
  padding: ["0", "0", "0", "0"],
  background: { r: 255, g: 255, b: 255, a: 1 },
  color: { r: 0, g: 0, b: 0, a: 1 },
  shadow: 0,
  radius: 0,
  height: "auto",
};
export const FrameContainer = (props) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  props = {
    ...defaultProps,
    ...props,
  };
  const { background, color, padding, shadow, radius, children } = props;
  return (
    <table
      ref={(ref) => connect(drag(ref))}
      style={{
        borderCollapse: "collapse",
        borderSpacing: "0",
        margin: "0 auto",
      }}
    >
      <tbody>
        <tr>
          <td
            style={{
              minWidth: "600px",
              maxWidth: "600px",
              minHeight: "350px",
              background: `rgba(${Object.values(background)})`,
              color: `rgba(${Object.values(color)})`,
              padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`,
              boxShadow:
                shadow === 0
                  ? "none"
                  : `0px 3px 100px ${shadow}px rgba(0, 0, 0, 0.13)`,
              borderRadius: `${radius}px`,
              overflowWrap: "break-word",
              overflow: "clip",
            }}
          >
            {children}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

FrameContainer.craft = {
  displayName: "Frame Container",
  props: defaultProps,
  rules: {
    canDrag: () => true,
  },
  related: {
    toolbar: FrameContainerSettings,
  },
};
