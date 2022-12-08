import React, { useEffect, useState } from "react";
import styles from "./SpaceControl.module.css";
import { AiOutlineLink } from "react-icons/ai";
import { Tooltip } from "@material-ui/core";
import { useNode } from "@craftjs/core";
const SpaceControl = ({ title, propsName }) => {
  const {
    actions: { setProp },
  } = useNode();
  const [toggle, setToggle] = useState(true);

  const [spacing, setSpacing] = useState({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  });
  // useEffect run when spcaing any property value change
  useEffect(() => {
    setProp((props) => (props[propsName] = spacing));
  }, [spacing]);
  // inputHandle function work for single input field
  const inputHandle = (event) => {
    const { name, value } = event.target;
    setSpacing({
      ...spacing,
      [name]: value,
    });
  };
  // groupInputHandle function work for  input group control field
  const groupInputHandle = (event) => {
    const { value } = event.target;
    setSpacing({
      top: value,
      right: value,
      bottom: value,
      left: value,
    });
  };

  return (
    <div>
      <label className={styles.controlHeadingName} htmlFor="label">
        {title || ""}
      </label>
      <div className={styles.inputControlerWrapper}>
        <div className={styles.inputControler}>
          <input
            value={spacing.top}
            name="top"
            type="number"
            onChange={toggle ? inputHandle : groupInputHandle}
          />
          <span>Top</span>
        </div>
        <div className={styles.inputControler}>
          <input
            value={spacing.right}
            name="right"
            type="number"
            onChange={toggle ? inputHandle : groupInputHandle}
          />
          <span>Right</span>
        </div>
        <div className={styles.inputControler}>
          <input
            value={spacing.bottom}
            name="bottom"
            type="number"
            onChange={toggle ? inputHandle : groupInputHandle}
          />
          <span>Bottom</span>
        </div>
        <div className={styles.inputControler}>
          <input
            value={spacing.left}
            name="left"
            type="number"
            onChange={toggle ? inputHandle : groupInputHandle}
          />
          <span>Left</span>
        </div>
        <Tooltip title="Link values together" placement="top-start">
          <div
            onClick={() => setToggle((prevState) => !prevState)}
            style={{
              background: toggle ? "#A4AFB7" : "transparent",
              color: toggle ? "#fff" : "#A4AFB7",
            }}
            className={styles.toggleControler}
          >
            <AiOutlineLink />
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default SpaceControl;
