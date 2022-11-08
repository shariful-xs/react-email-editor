import React from "react";
import { ToolbarSection, ToolbarItem } from '../../editor';
import { ToolbarRadio } from '../../editor/Toolbar/ToolbarRadio';

export const DividerSettings = () => {
  return (
    <React.Fragment>
      <ToolbarSection
        title='Line'
      >
        <ToolbarItem full={true} propKey="width"  type="slider" label="Width" />
        <ToolbarItem full={true} propKey="height"  type="slider" label="Height" />
      </ToolbarSection>
      <ToolbarSection  title='General'>
      <ToolbarItem propKey="justifyContent" type="radio" label="Justify Content">
          <ToolbarRadio value="flex-start" label="Flex start" />
          <ToolbarRadio value="center" label="Center" />
          <ToolbarRadio value="flex-end" label="Flex end" />
        </ToolbarItem>
        <ToolbarSection
        title="Margin"
        props={['margin']}
        summary={({ margin }) => {
          return `${margin[0] || 0}px ${margin[1] || 0}px ${margin[2] || 0}px ${
            margin[3] || 0
          }px`;
        }}
      >
        <ToolbarItem propKey="margin" index={0} type="slider" label="Top" />
        <ToolbarItem propKey="margin" index={1} type="slider" label="Right" />
        <ToolbarItem propKey="margin" index={2} type="slider" label="Bottom" />
        <ToolbarItem propKey="margin" index={3} type="slider" label="Left" />
      </ToolbarSection>
      </ToolbarSection>

      <ToolbarSection
        title="Apparence"
      >
        <ToolbarItem
          full={true}
          propKey="background"
          type="bg"
          label="Background"
        />
      </ToolbarSection>
    </React.Fragment>
  );
};
