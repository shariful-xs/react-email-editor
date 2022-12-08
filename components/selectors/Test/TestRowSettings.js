import React from "react";
import { ToolbarSection, ToolbarItem } from "../../editor";
import FileUpload from "../../editor/Toolbar/FileUpload";
export const TestRowSettings = () => {
  return (
    <React.Fragment>
      <ToolbarSection title="Row_Properties">
        <ToolbarItem
          full={true}
          propKey="background"
          type="bg"
          label="Background"
        />

        <h5
          style={{
            marginBottom: "8px",
          }}
        >
          Background Image
        </h5>
        <FileUpload />
      </ToolbarSection>
    </React.Fragment>
  );
};
