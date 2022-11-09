import { useEditor } from "@craftjs/core";
import { Tooltip } from "@material-ui/core";
import cx from "classnames";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";

import Checkmark from "../../../public/icons/check.svg";
import Customize from "../../../public/icons/customize.svg";
import RedoSvg from "../../../public/icons/toolbox/redo.svg";
import UndoSvg from "../../../public/icons/toolbox/undo.svg";
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

  const buttonRef = useRef(null);
  const cssPath = "../../../out/_next/static/css/8452dc317bf6f2f006fd.css";

  // using useEffect for side effect handling
  // useEffect(() => {
  //   // handle export html generate
  //   const handleExportHtml = () => {
  //     const bodyHtml = bodyRef.current;
  //     const existingTag = bodyHtml.getElementsByTagName("link");
  //     const includes = existingTag.length > 0;

  //     if (!includes) {
  //       const link = document.createElement("link");
  //       //link attribute set
  //       link.setAttribute("href", cssPath);
  //       link.setAttribute("rel", "stylesheet");
  //       //append child link=======
  //       bodyHtml.appendChild(link);
  //     }
  //     // send html from client to backend
  //     // 😊
  //     console.log(bodyHtml);
  //   };

  //   buttonRef.current = handleExportHtml;
  // }, []);

  const handleExportHtml = () => {
    const getHtml = bodyRef.current;
    console.log(getHtml);
  };

  const handleLoadBtn = () => {
    actions.setOptions((options) => (options.enabled = !enabled));
    const json = query.serialize();
    // console.log(json);
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
            onClick={handleLoadBtn}
          >
            {enabled ? <Checkmark /> : <Customize />}
            {enabled ? "Finish Editing" : "Edit"}
          </Btn>
        </div>
      </div>
    </HeaderDiv>
  );
};
