import { useEditor } from "@craftjs/core";
import React from "react";
import { Tooltip } from "@material-ui/core";
import { BiUndo, BiRedo } from "react-icons/bi";

import PreviewModal from "./Preview";
const TabFooter = () => {
  const { enabled, canUndo, canRedo, actions, query } = useEditor(
    (state, query) => ({
      enabled: state.options.enabled,
      canUndo: query.history.canUndo(),
      canRedo: query.history.canRedo(),
    })
  );
  return (
    <>
      <Tooltip title="Undo" placement="bottom">
        <div
          onClick={() => actions.history.undo()}
          style={{
            cursor: "pointer",
          }}
        >
          <BiUndo size={24} />
        </div>
      </Tooltip>

      <Tooltip title="Redo" placement="bottom">
        <div
          onClick={() => actions.history.redo()}
          style={{
            cursor: "pointer",
          }}
        >
          <BiRedo size={24} />
        </div>
      </Tooltip>

      <PreviewModal />
    </>
  );
};

export default TabFooter;
