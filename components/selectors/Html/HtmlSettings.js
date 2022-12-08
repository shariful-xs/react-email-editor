import React from "react";
import { ToolbarSection } from "../../editor";
import HtmlGenerate from "../../editor/Toolbar/HtmlGenerate";

export const HtmlSettings = () => {
  return (
    <React.Fragment>
      <ToolbarSection title="HTML">
        <HtmlGenerate />
      </ToolbarSection>
    </React.Fragment>
  );
};
