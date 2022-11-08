import React from "react";
import { ToolbarSection, ToolbarItem } from "../../editor";
import { ToolbarRadio } from "../../editor/Toolbar/ToolbarRadio";
export const TimerSettings = () => {
  return (
    <React.Fragment>
      <ToolbarSection title="COUNTDOWN">
        <ToolbarItem propKey="date" type="date" label="End Time" />
      </ToolbarSection>
    </React.Fragment>
  );
};
