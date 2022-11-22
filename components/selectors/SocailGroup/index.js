import React from "react";
import { SocailGroupSettings } from "./SocilGroupSettings";
import Tooltip from "@mui/material/Tooltip";
import { useNode } from "@craftjs/core";

const initItems = [
  {
    _id: `${Date.now() + Math.random() * 99}`,
    name: "Facebook",
    icon: "https://i.ibb.co/56Wg7v0/icons8-facebook-35.png",
    url: "https://www.facebook.com/",
  },
  {
    _id: `${Date.now() + Math.random() * 99}`,
    name: "Twiter",
    icon: "https://i.ibb.co/0V9wCBC/icons8-twitter-35.png",
    url: "https://twitter.com/login",
  },
  {
    _id: `${Date.now() + Math.random() * 99}`,
    name: "Yout Tube",
    icon: "https://i.ibb.co/7jpgKfq/icons8-youtube-35.png",
    url: "",
  },
];

export const SocailGroup = (props) => {
  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));
  const {
    alignItems,
    flexDirection,
    justifyContent,
    iconWidth,
    gap,
    color,
    socailIconList,
  } = props;

  const renderItem = socailIconList?.length > 0 ? socailIconList : initItems;

  return (
    <div
      ref={connect}
      style={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: flexDirection,
        justifyContent: justifyContent,
        alignItems: alignItems,
        color: `rgba(${Object.values(color)})`,
        gap: `${gap}rem`,
        cursor: "pointer",
      }}
    >
      {renderItem.map((item) => {
        return (
          <Tooltip title={item?.name} placement="top" key={item?._id}>
            <a href={item?.url ? item?.url : "#"}>
              <img
                style={{
                  width: `${iconWidth}rem`,
                }}
                src={item?.icon}
                alt={item?.name}
              />
            </a>
          </Tooltip>
        );
      })}
    </div>
  );
};

SocailGroup.craft = {
  displayName: "Socail Group",
  props: {
    iconWidth: "1.875",
    gap: "1.25",
    color: { r: 99, g: 99, b: 99, a: 1 },
  },
  rules: {
    canDrag: () => true,
  },
  related: {
    toolbar: SocailGroupSettings,
  },
};
