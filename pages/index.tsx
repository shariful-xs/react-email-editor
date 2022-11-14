import { Editor, Frame, Element } from "@craftjs/core";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "../rtk/app/store";

import { Viewport, RenderNode } from "../components/editor";
import { Container, Text } from "../components/selectors";
import { Button } from "../components/selectors/Button";
import { ImgTool } from "../components/selectors/Imgtool";
import { SocailGroup } from "../components/selectors/SocailGroup";
import { Divider } from "../components/selectors/Divider";
import { List } from "../components/selectors/List";
import lz from "lzutf8";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "acumin-pro",
      "Poppins",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

function App() {
  const [draft, setDraft] = useState(null);
  const [show, setShow] = useState(false);
  // isShow function work to state value true
  const isShow = () => {
    setTimeout(() => {
      setShow((preState) => !preState);
    }, 1000);
  };

  // Load save state from server on page load
  useEffect(() => {
    const loadJOSN = async () => {
      const response = await fetch("http://localhost:5000/email-template");
      const { draft } = await response.json();
      const json = lz.decompress(lz.decodeBase64(draft));
      setDraft(json);
    };
    loadJOSN();
    // isShow function run after 100ms and set the state value true
    isShow();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <div className="h-screen">
          <Editor
            resolver={{
              Container,
              Text,
              Button,
              ImgTool,
              SocailGroup,
              Divider,
              List,
            }}
            enabled={false}
            onRender={RenderNode}
          >
            <Viewport>
              {show && (
                <Frame data={draft}>
                  <Element
                    canvas
                    is={Container}
                    width="800px"
                    height="auto"
                    background={{ r: 255, g: 255, b: 255, a: 1 }}
                    padding={["40", "40", "40", "40"]}
                    custom={{ displayName: "App" }}
                  ></Element>
                </Frame>
              )}
            </Viewport>
          </Editor>
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
