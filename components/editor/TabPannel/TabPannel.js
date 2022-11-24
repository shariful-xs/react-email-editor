import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import GridSvg from "../../../public/icons/GridSvg";
import BlockSvg from "../../../public/icons/BlockSvg";
import BodySvg from "../../../public/icons/BodySvg";
import styles from "./TabPannel.module.css";
import { Toolbox } from "../Viewport/Toolbox";
import { useEditor } from "@craftjs/core";
import Tooltip from "@mui/material/Tooltip";

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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const tabArray = [
  { _id: "2j5kjb", tabName: "Content", img: <BlockSvg /> },
  { _id: "28df4kjb", tabName: "Blocks", img: <GridSvg /> },
  { _id: "28werwkjb", tabName: "Body", img: <BodySvg /> },
];

export default function VerticalTabs() {
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

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
          value={value}
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
              className={`${number === index && styles.tabStyle}`}
              label={
                <div className={`${styles.tabList}`}>
                  {item.img}
                  <p>{item.tabName}</p>
                </div>
              }
              {...a11yProps(index)}
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
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
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
