import React from "react";
import { SocailGroupSettings } from "./SocilGroupSettings";
import { BsFacebook, BsYoutube, BsTwitter } from "react-icons/bs";
import Tooltip from "@mui/material/Tooltip";
import { useNode } from "@craftjs/core";
import { useSelector } from "react-redux";
const initItems = [
  {
    _id: `${Date.now() + Math.random() * 99}`,
    name: "Facebook",
    icon: BsFacebook,
    url: "https://www.facebook.com/",
  },
  {
    _id: `${Date.now() + Math.random() * 99}`,
    name: "Twiter",
    icon: BsTwitter,
    url: "https://twitter.com/login",
  },
  {
    _id: `${Date.now() + Math.random() * 99}`,
    name: "Yout Tube",
    icon: BsYoutube,
    url: "",
  },
];

export const SocailGroup = (props) => {
  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const myIcons = useSelector((state) => state.socialIcons.items);

  const renderItem = myIcons.length > 0 ? myIcons : initItems;

  const { alignItems, flexDirection, justifyContent, iconWidth, gap, color } =
    props;

  return (
    <div
      ref={connect}
      style={{
        width: "100%",
        display: "flex",
        flexDirection: flexDirection,
        justifyContent: justifyContent,
        alignItems: alignItems,
        color: `rgba(${Object.values(color)})`,
        gap: `${gap}px`,
        cursor: "pointer",
      }}
    >
      {renderItem.map((item) => {
        return (
          <Tooltip title={item.name} placement="top" key={item._id}>
            <a href={`${item.url}`} target="_blank">
              {<item.icon size={iconWidth} />}
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
    iconWidth: "24",
    gap: "20",
    color: { r: 99, g: 99, b: 99, a: 1 },
  },
  rules: {
    canDrag: () => true,
  },
  related: {
    toolbar: SocailGroupSettings,
  },
};
