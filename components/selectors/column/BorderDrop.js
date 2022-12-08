import React, { useState } from "react";
import {
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Box,
} from "@material-ui/core";
import { useNode } from "@craftjs/core";

const BorderDrop = () => {
  const [borderType, setBorderType] = useState("");

  const {
    actions: { setProp },
  } = useNode();

  const handleChange = (event) => {
    setBorderType(event.target.value);

    const newBorder = event.target.value;
    setProp((props) => (props.BorderType = newBorder));
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          value={borderType}
          label="Type"
          onChange={handleChange}
        >
          <MenuItem value="solid">Solid</MenuItem>
          <MenuItem value="dotted">Dotted</MenuItem>
          <MenuItem value="dashed">Dashed</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default BorderDrop;
