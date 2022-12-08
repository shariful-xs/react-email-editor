import React, { useState } from "react";

import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";

import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineDesktop,
  AiOutlineTablet,
  AiOutlineMobile,
} from "react-icons/ai";
import { Tooltip } from "@material-ui/core";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function PreviewModal() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Tooltip title="Preview" placement="bottom">
        <div
          style={{
            cursor: "pointer",
          }}
        >
          <AiOutlineEye onClick={handleClickOpen} size={24} />
        </div>
      </Tooltip>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="preview-modal"
        open={open}
        style={{
          minWidth: "600px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 20px 6px 20px",
            borderBottom: "1px solid gray",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0 5px",
            }}
          >
            <Tooltip title="Desktop" placement="top">
              <div
                style={{
                  cursor: "pointer",
                }}
              >
                <AiOutlineDesktop size={24} />
              </div>
            </Tooltip>
            <Tooltip title="Tablet" placement="top">
              <div
                style={{
                  cursor: "pointer",
                }}
              >
                <AiOutlineTablet size={24} />
              </div>
            </Tooltip>
            <Tooltip title="Mobile" placement="top">
              <div
                style={{
                  cursor: "pointer",
                }}
              >
                <AiOutlineMobile size={24} />
              </div>
            </Tooltip>
          </div>
          <Tooltip title="Close Preview" placement="top">
            <div
              style={{
                cursor: "pointer",
              }}
            >
              <AiOutlineEyeInvisible onClick={handleClose} size={24} />
            </div>
          </Tooltip>
        </div>

        <div
          style={{
            padding: "20px",
          }}
        >
          <h1>hello world</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            dignissimos nesciunt omnis illum nostrum aliquid ducimus atque,
            neque corporis. Minima impedit, est ipsam facere commodi similique
            perspiciatis dolores dicta tempore.
          </p>
        </div>
      </BootstrapDialog>
    </div>
  );
}
