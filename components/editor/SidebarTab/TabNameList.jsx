import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { Tabs } from "@material-ui/core";

// tab name list
const tabNameLists = [
  { _id: "938kjdsl", name: "Elements" },
  { _id: "98jskjdsl", name: "Template" },
  { _id: "sofpkps0e", name: "Body" },
];
const TabNameList = ({ value, onChange }) => {
  return (
    <Box
      sx={{
        borderBottom: 1,
        borderColor: " #7a8ce2",
        backgroundColor: "#ededed",
      }}
    >
      <Tabs value={value} onChange={onChange} aria-label="tab-pannel">
        {tabNameLists.map((tab) => (
          <Tab
            key={tab._id}
            label={tab.name}
            style={{
              fontSize: "14px",
              textTransform: "capitalize",
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default TabNameList;
