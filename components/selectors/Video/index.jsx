import { useNode, useEditor } from "@craftjs/core";
import React from "react";

import { VideoSettings } from "./VideoSettings";
const defaultProps = {
  justifyContent: "center",
  margin: ["0", "0", "0", "0"],
  width: "18.75rem",
  height: "9.375rem",
};
export const Video = (props) => {
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  props = {
    ...defaultProps,
    ...props,
  };
  const { width, height, justifyContent, margin, picture, url } = props;
  const pictureInit = "https://i.ibb.co/s5M6d88/coding.jpg";

  return (
    <div
      ref={connect}
      enabled={enabled}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: justifyContent,
        margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
      }}
    >
      <div
        style={{
          minWidth: `${width}`,
          maxHeight: `${height}`,
          minHeight: `${height}`,
          background: picture ? `url(${picture})` : `url(${pictureInit})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a href={url ? url : "#"} target="_blank">
            <img src="https://i.ibb.co/7jpgKfq/icons8-youtube-35.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

Video.craft = {
  displayName: "Video",
  props: defaultProps,
  related: {
    toolbar: VideoSettings,
  },
};
