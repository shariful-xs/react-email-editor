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
    background,
    borderColor,
    text,
    margin,
    padding,
    borderRadius,
    buttonStyle,
    width,
    textComponent,
    color,
    justifyContent,
    fontSize,
    textAlign,
    fontWeight,
    url,
  } = props;

  return (
    <table
      ref={connect}
      style={{
        borderCollapse: "collapse",
        display: "flex",
        justifyContent,
      }}
    >
      <tbody>
        <tr>
          <td
            style={{
              width,
            }}
          >
            <button
              style={{
                display: "block",
                width: "100%",
                margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
                padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`,
                backgroundColor: `rgba(${Object.values(background)})`,
                border:
                  buttonStyle === "outline"
                    ? `1px solid rgba(${Object.values(borderColor)})`
                    : "none",
                borderRadius: `${borderRadius[0]}px ${borderRadius[1]}px ${borderRadius[2]}px ${borderRadius[3]}px`,
              }}
            >
              <a
                href={url ? url : "#"}
                style={{
                  textDecoration: "none",
                }}
              >
                <Text
                  {...textComponent}
                  text={text}
                  color={color}
                  fontSize={fontSize}
                  fontWeight={fontWeight}
                  textAlign={textAlign}
                />
              </a>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

Button.craft = {
  displayName: "Button",
  props: {
    width: "150px",
    background: { r: 99, g: 99, b: 99, a: 1 },
    color: { r: 255, g: 255, b: 255, a: 1 },
    borderColor: { r: 99, g: 99, b: 99, a: 1 },
    buttonStyle: "full",
    textAlign: "center",
    fontWeight: "400",
    fontSize: "16",
    justifyContent: "center",
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
