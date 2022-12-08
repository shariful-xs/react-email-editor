import { useNode, Element } from "@craftjs/core";
import React from "react";
import { TestRowSettings } from "./TestRowSettings";
import { Resizable } from "re-resizable";
import { Column } from "./Column";

const defaultProps = {
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  fillSpace: "no",
  padding: ["0", "0", "0", "0"],
  margin: ["0", "0", "0", "0"],
  background: { r: 255, g: 255, b: 255, a: 1 },
  color: { r: 0, g: 0, b: 0, a: 1 },
  shadow: 0,
  radius: 0,
  width: "500px",
  height: "200px",
};

export const TestColumnFour = (props) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  const { children } = props;
  props = {
    ...defaultProps,
    ...props,
  };

  const { background } = props;

  return (
    <table
      ref={(ref) => connect(drag(ref))}
      style={{
        borderCollapse: "collapse",
      }}
    >
      <tbody>
        <tr>
          <td
            style={{
              display: "flex",
              flexDirection: "row",
              background: `rgba(${Object.values(background)})`,
            }}
          >
            <Resizable
              style={{
                minWidth: "25%",
                height: "200px",
              }}
            >
              <Element id="text-1" canvas is={Column}>
                {children}
              </Element>
            </Resizable>

            <Resizable
              style={{
                minWidth: "25%",
                height: "200px",
              }}
            >
              <Element id="text-2" canvas is={Column}>
                {children}
              </Element>
            </Resizable>

            <Resizable
              style={{
                minWidth: "25%",
                height: "200px",
              }}
            >
              <Element id="text-3" canvas is={Column}>
                {children}
              </Element>
            </Resizable>
            <Resizable
              style={{
                minWidth: "25%",
                height: "200px",
              }}
            >
              <Element id="text-4" canvas is={Column}>
                {children}
              </Element>
            </Resizable>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

TestColumnFour.craft = {
  displayName: `Test_Row`,
  props: defaultProps,
  related: {
    toolbar: TestRowSettings,
  },
  rules: {
    canDrag: () => true,
  },
};
