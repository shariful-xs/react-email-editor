import { Element, useEditor } from "@craftjs/core";
import { Tooltip } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

import ButtonSvg from "../../../public/icons/toolbox/button.svg";
import SquareSvg from "../../../public/icons/toolbox/rectangle.svg";
import TypeSvg from "../../../public/icons/toolbox/text.svg";
import SocailSvg from "../../../public/icons/toolbox/SocailSvg";
import GallarySvg from "../../../public/icons/toolbox/GallarySvg";
import DividerSvg from "../../../public/icons/toolbox/DividerSvg";
import ListSvg from "../../../public/icons/toolbox/ListSvg";
import YoutubeSvg from "../../../public/icons/toolbox/video-line.svg";

import { Button } from "../../selectors/Button";
import { Container } from "../../selectors/Container";
import { Text } from "../../selectors/Text";
import { ImgTool } from "../../selectors/Imgtool";
import { SocailGroup } from "../../selectors/SocailGroup";
import { Divider } from "../../selectors/Divider";
import { List } from "../../selectors/List";
import { Video } from "../../selectors/Video";

const ToolboxDiv = styled.div<{ enabled: boolean }>`
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  ${(props) => (!props.enabled ? `width: 0;` : "")}
  ${(props) => (!props.enabled ? `opacity: 0;` : "")}
`;

const Item = styled.a<{ move?: boolean }>`
  svg {
    width: 60px;
    height: 30px;
    fill: #707070;
  }
  ${(props) =>
    props.move &&
    `
    cursor: move;
  `}
`;

export const Toolbox = () => {
  const {
    enabled,
    connectors: { create },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  //checking if the edior docs save sider wide remove
  const width = enabled ? "10rem" : null;

  return (
    <ToolboxDiv
      enabled={enabled && enabled}
      style={{
        width: width,
      }}
      className="toolbox transition  h-full bg-white"
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(3, 1fr)`,
        }}
        className=" pt-3"
      >
        <div
          ref={(ref) =>
            create(
              ref,
              <Element
                canvas
                is={Container}
                background={{ r: 78, g: 78, b: 78, a: 1 }}
                color={{ r: 0, g: 0, b: 0, a: 1 }}
              ></Element>
            )
          }
        >
          <Tooltip title="Container" placement="right">
            <Item
              style={{
                border: "1px solid #E0E0E0",
                borderRadius: "4px",
              }}
              className="m-2 py-2 cursor-pointer block"
              move
            >
              <SquareSvg />
            </Item>
          </Tooltip>
        </div>
        <div
          ref={(ref) =>
            create(ref, <Text fontSize="12" textAlign="left" text="Hi there" />)
          }
        >
          <Tooltip title="Text" placement="right">
            <Item
              style={{
                border: "1px solid #E0E0E0",
                borderRadius: "4px",
              }}
              className="m-2 py-2 cursor-pointer block"
              move
            >
              <TypeSvg />
            </Item>
          </Tooltip>
        </div>
        <div ref={(ref) => create(ref, <Button />)}>
          <Tooltip title="Button" placement="right">
            <Item
              style={{
                border: "1px solid #E0E0E0",
                borderRadius: "4px",
              }}
              className="m-2 py-2 cursor-pointer block"
              move
            >
              <ButtonSvg />
            </Item>
          </Tooltip>
        </div>

        <div
          ref={(ref) => create(ref, <Element canvas is={ImgTool}></Element>)}
        >
          <Tooltip title="Picture Tool" placement="right">
            <Item
              style={{
                border: "1px solid #E0E0E0",
                borderRadius: "4px",
              }}
              className="m-2 py-2 cursor-pointer block"
              move
            >
              <GallarySvg />
            </Item>
          </Tooltip>
        </div>

        <div ref={(ref) => create(ref, <SocailGroup />)}>
          <Tooltip title="Socail Icon" placement="right">
            <Item
              style={{
                border: "1px solid #E0E0E0",
                borderRadius: "4px",
              }}
              className="m-2 py-2 cursor-pointer block"
              move
            >
              <SocailSvg />
            </Item>
          </Tooltip>
        </div>
        <div ref={(ref) => create(ref, <Divider />)}>
          <Tooltip title="Divider" placement="right">
            <Item
              style={{
                border: "1px solid #E0E0E0",
                borderRadius: "4px",
              }}
              className="m-2 py-2 cursor-pointer block"
              move
            >
              <DividerSvg />
            </Item>
          </Tooltip>
        </div>

        <div ref={(ref) => create(ref, <List />)}>
          <Tooltip title="List" placement="right">
            <Item
              style={{
                border: "1px solid #E0E0E0",
                borderRadius: "4px",
              }}
              className="m-2 py-2 cursor-pointer block custom-item-class"
              move
            >
              <ListSvg />
            </Item>
          </Tooltip>
        </div>
        <div ref={(ref) => create(ref, <Video />)}>
          <Tooltip title="Video" placement="right">
            <Item
              style={{
                border: "1px solid #E0E0E0",
                borderRadius: "4px",
              }}
              className="m-2 py-2 cursor-pointer block custom-item-class"
              move
            >
              <YoutubeSvg />
            </Item>
          </Tooltip>
        </div>
      </div>
    </ToolboxDiv>
  );
};
