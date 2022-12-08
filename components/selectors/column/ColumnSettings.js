import React, { useState } from "react";
import { ColumnOne } from "./ColumnOne";
import { ColumnTwo } from "./ColumnTwo";
import { ColumnThree } from "./ColumnThree";
import { ColumnFour } from "./ColumnFour";
import { ColumnFive } from "./ColumnFive";
import { ColumnSix } from "./ColumnSix";
import { Element, useEditor, useNode } from "@craftjs/core";
import { ToolbarSection, ToolbarItem } from "../../editor";
import BorderDrop from "./BorderDrop";
import FileUpload from "../../editor/Toolbar/FileUpload";
const intialColumn = [
  {
    id: 1,
    column: ColumnOne,
    img: "https://i.ibb.co/VHn8x1x/column1.png",
  },
  {
    id: 2,
    column: ColumnTwo,
    img: "https://i.ibb.co/GtNqTK7/column2.png",
  },
  {
    id: 3,
    column: ColumnThree,
    img: "https://i.ibb.co/FzHjs9v/column3.png",
  },
  {
    id: 4,
    column: ColumnFour,
    img: "https://i.ibb.co/nRxcd4L/column4.png",
  },
  {
    id: 5,
    column: ColumnFive,
    img: "https://i.ibb.co/tJY7f4M/column5.png",
  },
  {
    id: 6,
    column: ColumnSix,
    img: "https://i.ibb.co/NZsCjTK/column6.png",
  },
];

export const ColumnSettings = (props) => {
  const {
    actions: { setProp },
  } = useNode();

  const {
    connectors: { create },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  // FOR COLUMN HANDLE
  const handleColumn = (item) => {
    setProp((props) => (props.columnContainer = item.column));
    setProp((props) => (props.columnID = item.id));
  };

  return (
    <>
      <ToolbarSection title="Columns">
        <div>
          {intialColumn.map((item) => (
            <div
              onClick={() => handleColumn(item)}
              key={item.id}
              style={{
                cursor: "pointer",
              }}
              ref={(ref) =>
                create(
                  ref,
                  <Element
                    canvas
                    is={item.column}
                    background={{ r: 255, g: 255, b: 255, a: 1 }}
                    color={{ r: 0, g: 0, b: 0, a: 0 }}
                    height="200px"
                    width="300px"
                  ></Element>
                )
              }
            >
              <img
                src={item.img}
                style={{ width: "100%", margin: "10px 0px" }}
              />
            </div>
          ))}
        </div>
      </ToolbarSection>
      <ToolbarSection title="Column_Properties">
        <ToolbarItem
          full={true}
          propKey="background"
          type="bg"
          label="Background"
        />
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
          <ToolbarItem
            propKey="padding"
            index={1}
            type="slider"
            label="Right"
          />
          <ToolbarItem
            propKey="padding"
            index={2}
            type="slider"
            label="Bottom"
          />
          <ToolbarItem propKey="padding" index={3} type="slider" label="Left" />
        </ToolbarSection>
        <ToolbarSection title="Border">
          <ToolbarItem full={true} propKey="color" type="color" label="Color" />
          <ToolbarItem
            full={true}
            propKey="radius"
            type="slider"
            label="Width"
          />
          <BorderDrop />
        </ToolbarSection>
      </ToolbarSection>
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
    </>
  );
};
