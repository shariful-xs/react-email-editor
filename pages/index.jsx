import { Editor, Frame, Element } from "@craftjs/core";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "../rtk/app/store";
import { ToastContainer } from "react-toastify";

import { Viewport, RenderNode } from "../components/editor";
import { FrameContainer } from "../components/selectors/FrameContainer";
import { Container, Text } from "../components/selectors";
import { Button } from "../components/selectors/Button";
import { Video } from "../components/selectors/Video";
import { ImgTool } from "../components/selectors/Imgtool";
import { Picture } from "../components/selectors/Picture";
import { SocailGroup } from "../components/selectors/SocailGroup";
import { Divider } from "../components/selectors/Divider";
import { List } from "../components/selectors/List";
import { HtmlContent } from "../components/selectors/Html";
import "react-toastify/dist/ReactToastify.css";
// for test
import { Column as TestSingleCol } from "../components/selectors/Test/Column";
import { TestColumnOne } from "../components/selectors/Test/TestColumnOne";
import { TestColumnTwo } from "../components/selectors/Test/TestColumnTwo";
import { TestColumnThree } from "../components/selectors/Test/TestColumnThree";
import { TestColumnFour } from "../components/selectors/Test/TestColumnFour";
import { TestColumnFive } from "../components/selectors/Test/TestColumnFive";
import { TestColumnSix } from "../components/selectors/Test/TestColumnSix";
// import context api
import EditorProvider from "../components//editor/context/EditorProvider";
//columns
import { Column } from "components/selectors/column";
import { ColumnOne } from "components/selectors/column/ColumnOne";
import { ColumnTwo } from "components/selectors/column/ColumnTwo";
import { ColumnThree } from "components/selectors/column/ColumnThree";
import { ColumnFour } from "components/selectors/column/ColumnFour";
import { ColumnFive } from "components/selectors/column/ColumnFive";
import { ColumnSix } from "components/selectors/column/ColumnSix";

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

  // Load save state from server on page load
  useEffect(() => {
    const loadJOSN = async () => {
      const response = await fetch("http://localhost:5000/data");
      const { object } = await response.json();
      setDraft(object);
    };
    loadJOSN();
  }, [draft]);

  return (
    <ThemeProvider theme={theme}>
      <EditorProvider>
        <div className="h-screen">
          <Editor
            resolver={{
              FrameContainer,
              Container,
              Text,
              Button,
              ImgTool,
              Picture,
              SocailGroup,
              Divider,
              List,
              Video,
              HtmlContent,
              Column,
              ColumnOne,
              ColumnTwo,
              ColumnThree,
              ColumnFour,
              ColumnFive,
              ColumnSix,
              // for test
              TestSingleCol,
              TestColumnTwo,
              TestColumnOne,
              TestColumnThree,
              TestColumnFour,
              TestColumnFive,
              TestColumnSix,
            }}
            enabled={false}
            onRender={RenderNode}
          >
            <ToastContainer />
            <Viewport>
              {draft && (
                <Frame data={draft}>
                  <Element
                    canvas
                    is={FrameContainer}
                    background={{ r: 255, g: 255, b: 255, a: 1 }}
                    padding={["40", "40", "40", "40"]}
                    custom={{ displayName: "App" }}
                  ></Element>
                </Frame>
              )}
              {!draft && (
                <Frame>
                  <Element
                    canvas
                    is={FrameContainer}
                    background={{ r: 255, g: 255, b: 255, a: 1 }}
                    padding={["40", "40", "40", "40"]}
                    custom={{ displayName: "App" }}
                  ></Element>
                </Frame>
              )}
            </Viewport>
          </Editor>
        </div>
      </EditorProvider>
    </ThemeProvider>
  );
}

export default App;
