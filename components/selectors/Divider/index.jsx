import { useNode } from "@craftjs/core";
import React from "react";
import { DividerSettings } from "./DividerSettings";

const defaultProps = {
  display: "flex",
  justifyContent: "flex-start",
  margin: { top: "0", right: "0", bottom: "0", left: "0" },
  background: { r: 99, g: 99, b: 99, a: 1 },
  width: "400px",
  height: "2px",
};

export const Divider = (props) => {
  const {
    connectors: { connect },
  } = useNode((node) => ({ selected: node.events.selected }));

  props = { ...defaultProps, ...props };

  const { width, height, background, justifyContent, margin } = props;

  return (
    <table
      ref={connect}
      style={{
        borderCollapse: "collapse",
        display: "flex",
        justifyContent,
        margin: `${margin.top}px ${margin.right}px ${margin.bottom}px ${margin.left}px`,
      }}
    >
      <tbody>
        <tr>
          <td
            style={{
              width,
              height,
              background: `rgba(${Object.values(background)})`,
            }}
          ></td>
        </tr>
      </tbody>
    </table>
  );
};

Divider.craft = {
  displayName: "Divider",
  props: defaultProps,
  rules: {
    canDrag: () => true,
  },
  related: {
    toolbar: DividerSettings,
  },
};
