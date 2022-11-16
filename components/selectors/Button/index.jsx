import { useNode } from "@craftjs/core";

import React from "react";
// import { useSelector } from "react-redux";
import { ButtonSettings } from "./ButtonSettings";

import { Text } from "../Text";

export const Button = (props) => {
  // const value = useSelector((state) => state.buttonLink.href);
  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const {
    text,
    margin,
    padding,
    borderRadius,
    buttonStyle,
    width,
    height,
    textComponent,
    color,
    textAlign,
    url,
  } = props;

  const customBtnStyle = {
    display: "inline-block",
    width: width,
    height: height,
    textDecoration: "none",
    margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
    padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`,
    backgroundColor: `rgba(${Object.values(props.background)})`,
    border:
      buttonStyle === "outline"
        ? `1px solid rgba(${Object.values(props.background)})`
        : null,
    borderRadius: `${borderRadius[0]}px ${borderRadius[1]}px ${borderRadius[2]}px ${borderRadius[3]}px`,
  };

  return (
    <div
      style={{
        width: "100%",
        textAlign: textAlign,
      }}
    >
      <a href={url ? url : "#"} style={customBtnStyle} ref={connect}>
        <Text {...textComponent} text={text} color={color} />
      </a>
    </div>
  );
};

Button.craft = {
  displayName: "Button",
  props: {
    background: { r: 99, g: 99, b: 99, a: 1 },
    color: { r: 255, g: 255, b: 255, a: 1 },
    buttonStyle: "full",
    textAlign: "left",
    text: "Button",
    margin: ["5", "0", "5", "0"],
    padding: ["4", "8", "4", "8"],
    borderRadius: ["5", "5", "5", "5"],
    textComponent: {
      ...Text.craft.props,
      textAlign: "center",
    },
  },
  related: {
    toolbar: ButtonSettings,
  },
};
// href={value ? value : "#"}
