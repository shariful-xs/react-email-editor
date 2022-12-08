import { useNode, Element } from "@craftjs/core";
import React from "react";
import { TestRowSettings } from "./TestRowSettings";

import { Resizable } from "re-resizable";
import { Column } from "./Column";

export const TestColumn = (props) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  const { children } = props;

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
              backgroundColor: "blue",
            }}
          >
            <Resizable
              style={{
                minWidth: "33%",
                height: "200px",
              }}
            >
              <Element id="text-1" canvas is={Column}>
                {children}
              </Element>
            </Resizable>

            <Resizable
              style={{
                minWidth: "33%",
                height: "200px",
              }}
            >
              <Element id="text-2" canvas is={Column}>
                {children}
              </Element>
            </Resizable>

            <Resizable
              style={{
                minWidth: "33%",
                height: "200px",
              }}
            >
              <Element id="text-3" canvas is={Column}>
                {children}
              </Element>
            </Resizable>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

TestColumn.craft = {
  displayName: `Test_Row`,
  props: {},
  related: {
    toolbar: TestRowSettings,
  },
  rules: {
    canDrag: () => true,
  },
};
