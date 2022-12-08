import { useNode } from "@craftjs/core";
import React from "react";
import { TestColumnSettings } from "./TestColumnSettings";
import { Resizable } from "re-resizable";
import { EmptyContent } from "./EmptyContent";
import { useEditorState } from "../../editor/context/EditorProvider";
// default settings props
const defaultProps = {
  background: { r: 255, g: 255, b: 255, a: 1 },
  color: { r: 0, g: 0, b: 0, a: 1 },
};

export const Column = (props) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  props = {
    ...defaultProps,
    ...props,
  };
  const { background, children } = props;

  return (
    <table
      ref={(ref) => connect(drag(ref))}
      style={{
        borderCollapse: "collapse",
      }}
    >
      <tbody>
        <tr>
          <td>
            <Resizable
              style={{
                display: "flex",
                width: "100%",
                // height: "auto",
                // flexDirection: "row",
                flexWrap: "wrap",
                background: `rgba(${Object.values(background)})`,
              }}
            >
              {children ? children : <EmptyContent />}
            </Resizable>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

Column.craft = {
  displayName: `Test_Column${Math.floor(Math.random())}`,
  props: defaultProps,
  rules: {
    canDrag: () => true,
  },
  related: {
    toolbar: TestColumnSettings,
  },
};
