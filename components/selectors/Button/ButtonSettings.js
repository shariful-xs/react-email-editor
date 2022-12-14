import React from "react";

import { ToolbarSection, ToolbarItem } from "../../editor";
import { ToolbarRadio } from "../../editor/Toolbar/ToolbarRadio";
// import SetLink from "../../editor/Toolbar/SetLink";
import { capitalize, weightDescription } from "../../../utils/text";
export const ButtonSettings = () => {
  return (
    <React.Fragment>
      <ToolbarSection
        title="Dimensions"
        props={["width"]}
        summary={({ width }) => {
          return `${width || 0}`;
        }}
      >
        <ToolbarItem propKey="width" type="text" label="Width" />
      </ToolbarSection>
      <ToolbarSection title="Action">
        {/* <SetLink /> */}
        <ToolbarItem propKey="url" type="setLink" label="Set Url" />
      </ToolbarSection>
      <ToolbarSection
        title="Colors"
        props={["background", "color"]}
        summary={({ background, color }) => {
          return (
            <div className="flex flex-row-reverse">
              <div
                style={{
                  background:
                    background && `rgba(${Object.values(background)})`,
                }}
                className="shadow-md flex-end w-6 h-6 text-center flex items-center rounded-full bg-black"
              >
                <p
                  style={{
                    color: color && `rgba(${Object.values(color)})`,
                  }}
                  className="text-white w-full text-center"
                >
                  T
                </p>
              </div>
            </div>
          );
        }}
      >
        <ToolbarItem
          full={true}
          propKey="background"
          type="bg"
          label="Background"
        />
        <ToolbarItem full={true} propKey="color" type="color" label="Text" />
      </ToolbarSection>
      <ToolbarSection
        title="Border_Color"
        props={["borderColor"]}
        summary={({ borderColor }) => {
          return (
            <div className="flex flex-row-reverse">
              <div
                style={{
                  background:
                    borderColor && `rgba(${Object.values(borderColor)})`,
                }}
                className="shadow-md flex-end w-6 h-6 text-center flex items-center rounded-full bg-black"
              ></div>
            </div>
          );
        }}
      >
        <ToolbarItem
          full={true}
          propKey="borderColor"
          type="bg"
          label="Background"
        />
      </ToolbarSection>
      <ToolbarSection
        title="Typography"
        props={["fontSize", "fontWeight", "textAlign"]}
        summary={({ fontSize, fontWeight, textAlign }) => {
          return `${fontSize || ""}, ${weightDescription(
            fontWeight
          )}, ${capitalize(textAlign)}`;
        }}
      >
        <ToolbarItem
          full={true}
          propKey="fontSize"
          type="slider"
          label="Font Size"
        />
        <ToolbarItem propKey="textAlign" type="radio" label="Align">
          <ToolbarRadio value="left" label="Left" />
          <ToolbarRadio value="center" label="Center" />
          <ToolbarRadio value="right" label="Right" />
        </ToolbarItem>
        <ToolbarItem propKey="fontWeight" type="radio" label="Weight">
          <ToolbarRadio value="400" label="Regular" />
          <ToolbarRadio value="500" label="Medium" />
          <ToolbarRadio value="700" label="Bold" />
        </ToolbarItem>
      </ToolbarSection>
      <ToolbarSection title="Alignment">
        <ToolbarItem
          propKey="justifyContent"
          type="radio"
          label="Justify Content"
        >
          <ToolbarRadio value="flex-start" label="Flex start" />
          <ToolbarRadio value="center" label="Center" />
          <ToolbarRadio value="flex-end" label="Flex end" />
        </ToolbarItem>
      </ToolbarSection>
      <ToolbarSection
        title="Margin"
        props={["margin"]}
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
      <ToolbarSection
        title="Padding"
        props={["padding"]}
        summary={({ padding }) => {
          return `${padding[0] || 0}px ${padding[1] || 0}px ${
            padding[2] || 0
          }px ${padding[3] || 0}px`;
        }}
      >
        <ToolbarItem propKey="padding" index={0} type="slider" label="Top" />
        <ToolbarItem propKey="padding" index={1} type="slider" label="Right" />
        <ToolbarItem propKey="padding" index={2} type="slider" label="Bottom" />
        <ToolbarItem propKey="padding" index={3} type="slider" label="Left" />
      </ToolbarSection>
      <ToolbarSection
        title="borderRadius"
        props={["borderRadius"]}
        summary={({ borderRadius }) => {
          return `${borderRadius[0] || 0}px ${borderRadius[1] || 0}px ${
            borderRadius[2] || 0
          }px ${borderRadius[3] || 0}px`;
        }}
      >
        <ToolbarItem
          propKey="borderRadius"
          index={0}
          type="slider"
          label="Top"
        />
        <ToolbarItem
          propKey="borderRadius"
          index={1}
          type="slider"
          label="Right"
        />
        <ToolbarItem
          propKey="borderRadius"
          index={2}
          type="slider"
          label="Bottom"
        />
        <ToolbarItem
          propKey="borderRadius"
          index={3}
          type="slider"
          label="Left"
        />
      </ToolbarSection>
      <ToolbarSection title="Decoration">
        <ToolbarItem propKey="buttonStyle" type="radio" label="Style">
          <ToolbarRadio value="full" label="Full" />
          <ToolbarRadio value="outline" label="Outline" />
        </ToolbarItem>
      </ToolbarSection>
    </React.Fragment>
  );
};
