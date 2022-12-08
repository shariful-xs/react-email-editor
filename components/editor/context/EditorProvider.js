import React, { createContext, useContext, useState } from "react";

const EDITOR_CONTEXT = createContext();

const EditorProvider = ({ children }) => {
  const [state, setState] = useState({});
  const applicationState = {
    state,
    setState,
  };
  return (
    <EDITOR_CONTEXT.Provider value={applicationState}>
      {children}
    </EDITOR_CONTEXT.Provider>
  );
};

export const useEditorState = () => {
  const context = useContext(EDITOR_CONTEXT);
  return context;
};

export default EditorProvider;
