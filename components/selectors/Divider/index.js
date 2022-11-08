import { useNode } from "@craftjs/core";
import React from "react";
import { DividerSettings } from "./DividerSettings";

const defaultProps = {
  display: "flex",
  justifyContent: "flex-start",
  margin: ["0", "0", "0", "0"],
  background: { r: 99, g: 99, b: 99, a: 1 },
  width: "40",
  height: "2",
};

export const Divider = (props) => {
  const {
    connectors: { connect },
  } = useNode((node) => ({ selected: node.events.selected }));
  props = { ...defaultProps, ...props };

  const { width, height, background, justifyContent, margin } = props;

  return (
    <div
      ref={connect}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: `${justifyContent}`,
        margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
      }}
    >
      <div
        style={{
          width: `${width}%`,
          height: `${height}px`,
          background: `rgba(${Object.values(background)})`,
        }}
      ></div>
    </div>
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
