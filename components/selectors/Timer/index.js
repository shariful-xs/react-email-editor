import { useNode } from "@craftjs/core";
import React from "react";
import Countdown from "react-countdown";
// import styles from "./Timer.module.css";
import { TimerSettings } from "./TimerSettings";

const Completionist = () => <span>You are good to go!</span>;

const defaultValue = {
  date: "2017-05-24T10:30",
};

export const Timer = (props) => {
  const {
    connectors: { connect },
  } = useNode((node) => ({ selected: node.events.selected }));
  props = {
    ...defaultValue,
    ...props,
  };

  const { date } = props;

  // convert date to seconds
  const newDate = new Date(date);
  const seconds = Math.floor(newDate.getTime() / 1000);

  return (
    <div
      ref={connect}
      style={{
        width: "100%",
        height: "auto",
        backgroundColor: "darkviolet",
        color: "#fff",
        fontSize: "56px",
        textAlign: "center",
      }}
    >
      <Countdown date={Date.now() + seconds}>
        <Completionist />
      </Countdown>
      <div
        style={{
          display: "flex",
          fontSize: "30px",
          justifyContent: "center",
        }}
      >
        <p>Day</p>
        <p>Hour</p>
        <p>Minutes</p>
        <p>Second</p>
      </div>
    </div>
  );
};

Timer.craft = {
  displayName: "Timer",
  props: defaultValue,
  rules: {
    canDrag: () => true,
  },
  related: {
    toolbar: TimerSettings,
  },
};
