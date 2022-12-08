import React from "react";
import { Resizable } from "re-resizable";
import { Element, useNode } from "@craftjs/core";
import { ColumnOne } from "./ColumnOne";

export const ColumnThree = (props) => {
  const {
    children,
    BackgroundPicture,
    Background,
    PaddingStyle = [],
    BorderStyle = "",
  } = props;
  const { BorderType, color, radius } = BorderStyle;

  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  return (
    <table
      ref={connect}
      style={{
        width: "100%",
        backgroundImage: `url(${BackgroundPicture || ""})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        border: `${radius || 0}px ${BorderType || ""} rgba(${Object.values(
          color || "#000"
        )})`,
        background: `${Background ? `rgba(${Object.values(Background)})` : ""}`,
      }}
    >
      <tbody>
        {" "}
        <tr>
          <td
            style={{
              width: "33.33%",
              textAlign: "center",
              padding: `${PaddingStyle[0]}px ${PaddingStyle[1]}px ${PaddingStyle[2]}px ${PaddingStyle[3]}px`,
            }}
          >
            <Resizable>
              <Element canvas is={ColumnOne} id="1">
                {children}
              </Element>
            </Resizable>
          </td>
          <td
            style={{
              width: "33.33%",
              textAlign: "center",
              padding: `${PaddingStyle[0]}px ${PaddingStyle[1]}px ${PaddingStyle[2]}px ${PaddingStyle[3]}px`,
            }}
          >
            <Resizable>
              <Element canvas is={ColumnOne} id="2">
                {children}
              </Element>
            </Resizable>
          </td>
          <td
            style={{
              width: "33.33%",
              textAlign: "center",
              padding: `${PaddingStyle[0]}px ${PaddingStyle[1]}px ${PaddingStyle[2]}px ${PaddingStyle[3]}px`,
            }}
          >
            <Resizable>
              <Element canvas is={ColumnOne} id="3">
                {children}
              </Element>
            </Resizable>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
