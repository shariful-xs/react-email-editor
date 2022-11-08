import React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

const Date = ({ title, onChange }: any) => {
  return (
    <Stack component="form" noValidate spacing={3}>
      <TextField
        id="datetime-local"
        label={title}
        size="small"
        type="datetime-local"
        onChange={(event) => onChange(event.target.value)}
        sx={{ width: 250 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Stack>
  );
};

export default Date;
