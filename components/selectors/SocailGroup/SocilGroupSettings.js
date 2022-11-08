import React from "react";
import IconsList from "./IconsList";
import { ToolbarSection, ToolbarItem } from "../../editor";
import { ToolbarRadio } from "../../editor/Toolbar/ToolbarRadio";

export const SocailGroupSettings = () => {
  return (
    <React.Fragment>
      <ToolbarSection title="Icons">
        <IconsList />
      </ToolbarSection>
      <ToolbarSection title="General">
        <ToolbarItem propKey="TextAlign" type="radio" label="Text Align">
          <div className="flex items-center">
            <ToolbarRadio value="left" label="Left" />
            <ToolbarRadio value="center" label="Center" />
            <ToolbarRadio value="right" label="Right" />
          </div>
        </ToolbarItem>
      </ToolbarSection>
      <ToolbarSection title="Alignment">
        <ToolbarItem
          propKey="flexDirection"
          type="radio"
          label="Flex Direction"
        >
          <ToolbarRadio value="row" label="Row" />
          <ToolbarRadio value="column" label="Column" />
        </ToolbarItem>
        <ToolbarItem propKey="alignItems" type="radio" label="Align Items">
          <ToolbarRadio value="flex-start" label="Flex start" />
          <ToolbarRadio value="center" label="Center" />
          <ToolbarRadio value="flex-end" label="Flex end" />
        </ToolbarItem>
        <ToolbarItem
          propKey="justifyContent"
          type="radio"
          label="Justify Content"
        >
          <ToolbarRadio value="flex-start" label="Flex start" />
          <ToolbarRadio value="center" label="Center" />
          <ToolbarRadio value="flex-end" label="Flex end" />
        </ToolbarItem>
        <ToolbarItem propKey="iconWidth" type="box" label="Icon Width" />
      </ToolbarSection>
    </React.Fragment>
  );
};
