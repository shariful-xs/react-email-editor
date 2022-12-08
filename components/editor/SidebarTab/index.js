import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "./SidebarTab.module.css";
import { FiGrid } from "react-icons/fi";
import TabNameList from "./TabNameList";
import TabFooter from "./TabFooter";
import { Toolbox } from "../../editor/Viewport/Toolbox";
import { useEditor } from "@craftjs/core";
import { Sidebar } from "../../editor/Viewport/Sidebar";
// import ContentStyleSetting from "../ContentStyleSetting";
export const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <div className={styles.tabChildContainer}>{children}</div>
      )}
    </div>
  );
};

const SidebarTab = () => {
  const [value, setValue] = useState(0);
  const [toggle, setToggle] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // handle toggle
  const handleToggle = () => {
    setToggle((prevState) => !prevState);
    if (!toggle) {
      setValue(0);
    }
  };

  return (
    <main className={styles.mainContainer}>
      <div className={styles.tabHeader}>
        <div className={styles.tabHeaderChildOne}>
          <h2>Widgets</h2>
        </div>
        <div className={styles.tabHeaderChildTwo}>
          <FiGrid onClick={handleToggle} className={styles.toggleElIcon} />
        </div>
      </div>

      {toggle ? (
        <Sidebar />
      ) : (
        <Box>
          <TabNameList value={value} onChange={handleChange} />

          <TabPanel value={value} index={0}>
            <Toolbox />
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
        </Box>
      )}

      <div className={styles.footerContainer}>
        <TabFooter />
      </div>
    </main>
  );
};

export default SidebarTab;
