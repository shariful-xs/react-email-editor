import { useEditor } from "@craftjs/core";
import cx from "classnames";
import { Tooltip, Button as MaterialButton } from "@material-ui/core";

import React, { useEffect } from "react";
import styled from "styled-components";

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

  // useEffect hooks use for fetch the editor child data from server side
  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((res) => res.json())
      .then((data) => data?.html);
  }, []);

  // handleData function work -> data send from client side to server side

  const handleData = () => {
    const object = query.serialize();
    const getHtml = bodyRef.current;
    const itemsList = getHtml.querySelectorAll(".contentEditable");
    // if get itemsList length is gretter than 0  (editable content) the run the code and set all item editable content attribute false
    if (itemsList.length > 0) {
      for (const item of itemsList) {
        item.setAttribute("contenteditable", "false");
      }
    }

    const html = getHtml.outerHTML;

    fetch("http://localhost:5000/data", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ html, object }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  // data save function
  const handleSaveData = () => {
    // enabled editor or disabled
    actions.setOptions((options) => (options.enabled = !enabled));
    // if editor enabled then run the code
    if (enabled) {
      handleData();
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
            {enabled ? "Save" : "Edit"}
          </Btn>
        </div>
      </div>
    </HeaderDiv>
  );
};
