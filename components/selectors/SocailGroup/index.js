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
    <table
      ref={connect}
      style={{
        borderCollapse: "collapse",
        width: "100%",
      }}
    >
      <tbody>
        <tr>
          <td
            style={{
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
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
                <div key={item?._id}>
                  <Tooltip title={item?.name} placement="top">
                    <a href={item?.url ? item?.url : "#"}>
                      <img
                        style={{
                          width: `${iconWidth}px`,
                        }}
                        src={item?.icon}
                        alt={item?.name}
                      />
                    </a>
                  </Tooltip>
                </div>
              );
            })}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

SocailGroup.craft = {
  displayName: "Socail Group",
  props: {
    iconWidth: "30",
    gap: "20",
    padding: ["10", "10", "10", "10"],
    color: { r: 99, g: 99, b: 99, a: 1 },
  },
  rules: {
    canDrag: () => true,
  },
  related: {
    toolbar: SocailGroupSettings,
  },
};
