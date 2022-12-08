import React from "react";
import { useNode } from "@craftjs/core";
import { ColumnSettings } from "./ColumnSettings";
import { Resizable } from "re-resizable";
import ColumnNoContent from "./ColumnNoContent";

export const Column = (props) => {
  const {
    children,
    width,
    columnContainer: ColumnContainer,
    columnID,
    flexDirection,
    alignItems,
    justifyContent,
    background,
    color,
    padding,
    margin,
    picture,
    BorderType,
    radius,
  } = props;

  const BorderStyle = { BorderType, radius, color };

  const {
    connectors: { connect, drag },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  return (
    <>
      {ColumnContainer ? (
        <ColumnContainer
          children={children}
          BackgroundPicture={picture}
          Background={background}
          BorderStyle={BorderStyle}
          PaddingStyle={padding}
        />
      ) : (
        <table
          ref={connect}
          style={{
            width: "100%",
            borderCollapse: "collapse",
            borderSpacing: "0",
          }}
        >
          <tbody>
            <tr>
              <td
                style={{
                  width: "100%",
                  padding: "10px",
                  textAlign: "center",
                  padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`,
                  background: `${
                    background ? `rgba(${Object.values(background)})` : ""
                  }`,
                  backgroundImage: `url(${picture || ""})`,
                  backgroundSize: "cover",
                  backgroundPosition: "top",
                  backgroundRepeat: "no-repeat",
                  border: `${radius}px ${BorderType || ""} rgba(${Object.values(
                    color
                  )})`,
                }}
              >
                <Resizable>
                  {children ? children : <ColumnNoContent />}
                </Resizable>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
};

// DEFUALT PROPS FOR THIS COMPONENTS
const defaultProps = {
  background: { r: 255, g: 255, b: 255, a: 1 },
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  padding: ["0", "0", "0", "0"],
  margin: ["0", "0", "0", "0"],
  color: { r: 0, g: 0, b: 0, a: 0 },
  radius: 0,
};

Column.craft = {
  displayName: "Column",
  props: defaultProps,
  rules: {
    canDrag: () => true,
  },
  related: {
    toolbar: ColumnSettings,
  },
};
