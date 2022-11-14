import { useEditor } from "@craftjs/core";
import cx from "classnames";
import {
  Tooltip,
  Box,
  FormControlLabel,
  Switch,
  Grid,
  Button as MaterialButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Snackbar,
} from "@material-ui/core";

import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";

import Checkmark from "../../../public/icons/check.svg";
import Customize from "../../../public/icons/customize.svg";
import RedoSvg from "../../../public/icons/toolbox/redo.svg";
import UndoSvg from "../../../public/icons/toolbox/undo.svg";
import lz from "lzutf8";

const HeaderDiv = styled.div`
  width: 100%;
  height: 45px;
  z-index: 99999;
  position: relative;
  padding: 0px 10px;
  background: #d4d4d4;
  display: flex;
`;

const Btn = styled.a`
  display: flex;
  align-items: center;
  padding: 5px 15px;
  border-radius: 3px;
  color: #fff;
  font-size: 13px;
  svg {
    margin-right: 6px;
    width: 12px;
    height: 12px;
    fill: #fff;
    opacity: 0.9;
  }
`;

const Item = styled.a<{ disabled?: boolean }>`
  margin-right: 10px;
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
    fill: #707070;
  }
  ${(props) =>
    props.disabled &&
    `
    opacity:0.5;
    cursor: not-allowed;
  `}
`;

export const Header = ({ bodyRef }) => {
  const { enabled, canUndo, canRedo, actions, query } = useEditor(
    (state, query) => ({
      enabled: state.options.enabled,
      canUndo: query.history.canUndo(),
      canRedo: query.history.canRedo(),
    })
  );

  // useEffect function for fetch the body data in editor
  useEffect(() => {
    fetch("http://localhost:5000/email")
      .then((res) => res.json())
      .then((data) => data?.html);
  }, []);

  // handleExportHtml function work -> html data post client side to server side
  const handleExportHtml = () => {
    // get current html
    const getHtml = bodyRef.current;
    const html = getHtml.outerHTML;
    fetch("http://localhost:5000/email", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ html }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  // data save function
  const handleSaveData = () => {
    // enable editor or disenable
    actions.setOptions((options) => (options.enabled = !enabled));
    // if editor enabled then run the code execute
    if (enabled) {
      const currentJson = query.serialize();
      const draft = lz.encodeBase64(lz.compress(currentJson));
      // send copystate client side to  server side
      fetch("http://localhost:5000/email-template", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ draft }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    }
  };

  return (
    <HeaderDiv className="header text-white transition w-full">
      <div className="items-center flex w-full px-4 justify-end">
        {enabled && (
          <div className="flex-1 flex">
            <Tooltip title="Undo" placement="bottom">
              <Item disabled={!canUndo} onClick={() => actions.history.undo()}>
                <UndoSvg />
              </Item>
            </Tooltip>
            <Tooltip title="Redo" placement="bottom">
              <Item disabled={!canRedo} onClick={() => actions.history.redo()}>
                <RedoSvg />
              </Item>
            </Tooltip>
          </div>
        )}
        {/* export html */}
        {enabled && (
          <Button
            sx={{ marginRight: "20px" }}
            size="small"
            variant="contained"
            color="success"
            onClick={handleExportHtml}
          >
            Export Html
          </Button>
        )}
        <div className="flex">
          <Btn
            className={cx([
              "transition cursor-pointer",
              {
                "bg-green-400": enabled,
                "bg-primary": !enabled,
              },
            ])}
            onClick={handleSaveData}
          >
            {enabled ? <Checkmark /> : <Customize />}
            {enabled ? "Saved" : "Edit"}
          </Btn>
        </div>
      </div>
    </HeaderDiv>
  );
};
