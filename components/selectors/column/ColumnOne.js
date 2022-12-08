import React from "react";
import { useNode } from "@craftjs/core";
import ColumnNoContent from "./ColumnNoContent";

export const ColumnOne = (props) => {
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
        height: "100%",
        border: `${radius || 0}px ${BorderType || ""} rgba(${Object.values(
          color || "#000"
        )})`,
        background: `${Background ? `rgba(${Object.values(Background)})` : ""}`,
      }}
    >
      <tbody>
        <tr>
          <td
            style={{
              textAlign: "center",
              boxShadow: "0px 0px 1px 0px gray",
              width: "100%",
              minHeight: "500px",
              backgroundImage: `url(${BackgroundPicture || ""})`,
              backgroundSize: "cover",
              backgroundPosition: "top",
              backgroundRepeat: "no-repeat",
              padding: `${PaddingStyle[0]}px ${PaddingStyle[1]}px ${PaddingStyle[2]}px ${PaddingStyle[3]}px`,
            }}
          >
            {children ? children : <ColumnNoContent />}
          </td>
        </tr>
      </tbody>
    </table>
  );
};
