import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import Editor from "@monaco-editor/react";
import { ClockLoader as Loader } from "react-spinners";
import examples from "./examples.js";

function CodeEditor() {
  const active_theme=useSelector(state=>state.editorReducer.theme)
  const lang=useSelector(state=>state.editorReducer.language)
  console.log(lang,active_theme)
  const [isEditorReady, setIsEditorReady] = useState(false);
  const dispatch=useDispatch();
  function handleEditorDidMount() {
    setIsEditorReady(true);
  }
  console.log(examples["python"])
  return (
    <>
  
      <Editor
        
        height="100%"
        // width="500px" 
        // width="90vh"// By default, it fully fits with its parent
        theme={active_theme}
        language="python"
        loading={<Loader />}
        value={examples["python"]}
        editorDidMount={handleEditorDidMount}
        
      />
  
    </>
  );
}
export default CodeEditor