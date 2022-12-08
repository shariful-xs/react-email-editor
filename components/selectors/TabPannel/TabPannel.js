import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import GridSvg from "../../../public/icons/GridSvg";
import BlockSvg from "../../../public/icons/BlockSvg";
import BodySvg from "../../../public/icons/BodySvg";
import styles from "./TabPannel.module.css";
import { Toolbox } from "../../editor/Viewport/Toolbox";
import { Element, useEditor } from "@craftjs/core";

import Tooltip from "@mui/material/Tooltip";

// ====== IMPORT FOR COLUMN ========
import { ColumnOne } from "../../selectors/column/ColumnOne";
import { ColumnTwo } from "../../selectors/column/ColumnTwo";
import { ColumnThree } from "../../selectors/column/ColumnThree";
import { ColumnFour } from "../../selectors/column/ColumnFour";
import { ColumnFive } from "../../selectors/column/ColumnFive";
import { ColumnSix } from "../../selectors/column/ColumnSix";
// for testing column
import { TestColumnOne } from "../../selectors/Test/TestColumnOne";
import { TestColumnTwo } from "../../selectors/Test/TestColumnTwo";
import { TestColumnThree } from "../../selectors/Test/TestColumnThree";
import { TestColumnFour } from "../../selectors/Test/TestColumnFour";
import { TestColumnFive } from "../../selectors/Test/TestColumnFive";
import { TestColumnSix } from "../../selectors/Test/TestColumnSix";
import { useEditorState } from "../../editor/context/EditorProvider";
// =========== COLUMN =============
const intialColumn = [
  {
    id: 1,
    column: TestColumnOne,
    img: "https://i.ibb.co/VHn8x1x/column1.png",
  },
  {
    id: 2,
    column: TestColumnTwo,
    img: "https://i.ibb.co/GtNqTK7/column2.png",
  },
  {
    id: 3,
    column: TestColumnThree,
    img: "https://i.ibb.co/FzHjs9v/column3.png",
  },
  {
    id: 4,
    column: TestColumnFour,
    img: "https://i.ibb.co/nRxcd4L/column4.png",
  },
  {
    id: 5,
    column: TestColumnFive,
    img: "https://i.ibb.co/tJY7f4M/column5.png",
  },
  {
    id: 6,
    column: TestColumnSix,
    img: "https://i.ibb.co/NZsCjTK/column6.png",
  },
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div
          style={{
            width: "100%",
            padding: "12px",
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}

const tabArray = [
  { _id: "2j5kjb", tabName: "Content", img: <BlockSvg /> },
  { _id: "28df4kjb", tabName: "Blocks", img: <GridSvg /> },
  // { _id: "28werwkjb", tabName: "Body", img: <BodySvg /> },
];

export default function VerticalTabs() {
  const { state, setState } = useEditorState();

  // ========= FOR CREATING NEW INSTANCE ========
  const {
    enabled,
    connectors: { create },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  // =================
  const [value, setValue] = useState(0);
  const [isHide, setHide] = useState(true);
  const [number, setNumber] = useState(0);
  // handle tab change
  const handleChange = (event, newValue) => {
    setValue(newValue);

    if (isHide === false) {
      setHide((prevState) => !prevState);
    }
  };
  // handle sidebar functionality
  const handleSidebar = () => {
    setValue(null);
    setNumber(null);
    setHide((prevState) => !prevState);
  };
  // ======== FOR HANDLE COLUMN DYNAMICLY ========

  const handleColumn = (item) => {
    setState(item);
  };

  return (
    <div
      style={{
        display: enabled ? "block" : "none",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "100%",
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={false}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{
            borderRight: 1,
            borderColor: "divider",
            backgroundColor: "#E0E0E0",
            zIndex: "2",
          }}
        >
          {tabArray.map((item, index) => (
            <Tab
              onClick={() => setNumber(index)}
              key={item._id}
              style={{
                padding: "12px 16px",
                backgroundColor: `${number === index ? "white" : ""}`,
              }}
              label={
                <div className={`${styles.tabList}`}>
                  {item.img}
                  <p>{item.tabName}</p>
                </div>
              }
            />
          ))}
        </Tabs>
        <div
          className={`${styles.tabContainer}`}
          style={{
            width: "300px",
            backgroundColor: "#fff",
            position: "relative",
            left: isHide ? "0px" : "-320px",
            zIndex: "1",
          }}
        >
          <TabPanel value={value} index={0}>
            <Toolbox />
          </TabPanel>

          <TabPanel value={value} index={1}>
            {intialColumn.map((item) => (
              <div
                onClick={() => handleColumn(item)}
                key={item.id}
                ref={(ref) =>
                  create(
                    ref,
                    <Element
                      id={item.id}
                      canvas
                      is={item.column}
                      background={{ r: 128, g: 128, b: 128, a: 0.5 }}
                      color={{ r: 0, g: 0, b: 0, a: 1 }}
                      height="200px"
                      width="300px"
                    ></Element>
                  )
                }
              >
                <img
                  src={item.img}
                  style={{
                    width: "100%",
                    height: "50px",
                    margin: "10px 0px",
                    cursor: "pointer",
                  }}
                />
              </div>
            ))}
          </TabPanel>

          {/* <TabPanel value={value} index={2}>
            Item Three
          </TabPanel> */}
          <Tooltip title="Hide" placement="right">
            <button
              onClick={handleSidebar}
              className={`${styles.customBtn}`}
            ></button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
