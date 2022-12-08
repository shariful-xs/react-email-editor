import { useNode } from "@craftjs/core";
import React from "react";
import { HtmlSettings } from "./HtmlSettings";
import ContentEditable from "react-contenteditable";
// import sanitizeHtml from "sanitize-html";

export const HtmlContent = ({ genearateHTML }) => {
  const {
    connectors: { connect },
  } = useNode();

  const initRenderHtml = "Hello World";

  return (
    <table
      ref={connect}
      style={{
        borderCollapse: "collapse",
      }}
    >
      <tbody>
        <tr>
          <td>
            <ContentEditable
              disabled
              tagName="div"
              html={genearateHTML || initRenderHtml} // innerHTML of the editable div
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

HtmlContent.craft = {
  displayName: "Html Content",
  props: {},
  rules: {
    canDrag: () => true,
  },
  related: {
    toolbar: HtmlSettings,
  },
};
