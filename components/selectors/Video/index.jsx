import { useNode, useEditor } from "@craftjs/core";
import React from "react";

import { VideoSettings } from "./VideoSettings";
const defaultProps = {
  justifyContent: "center",
  margin: ["0", "0", "0", "0"],
  width: "300px",
  height: "150px",
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
    <table
      ref={connect}
      enabled={enabled.toString()}
      style={{
        borderCollapse: "collapse",
        display: "flex",
        justifyContent,
        alignItems: "center",
      }}
    >
      <tbody>
        <tr>
          <td
            style={{
              width: width,
              height: height,
              background: `url(${picture ? picture : pictureInit})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
            }}
          >
            <a href={url ? url : "#"} target="_blank">
              <img
                src="https://i.ibb.co/7jpgKfq/icons8-youtube-35.png"
                alt=""
              />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

Video.craft = {
  displayName: "Video",
  props: defaultProps,
  related: {
    toolbar: VideoSettings,
  },
};
