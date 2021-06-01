// import React, { useState, useEffect } from 'react'
// import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//     container: {
//         display: "flex",
//         flexWrap: "wrap"
//     },
//     textField: {
//         marginLeft: theme.spacing(1),
//         marginRight: theme.spacing(1),
//         marginTop: theme.spacing(1),
//     }
// }))


// function InputBox(props) {
//     console.log(props)
//     const [inputs, setInputs] = useState('');
//     const classes = useStyles();
//     return (
//         <div>
//             <TextField
//                 className={classes.textField}
//                 onChange={(e) => setInputs(e.target.value)} 
//                 variant="outlined" 
//                 multiline="true"
//                 rows="10"
//                 size="medium"
//                 fullWidth="true"
//                 label={props.type}
//                 inputProps={{
//                     style: {
//                         color: "#fff",
//                     }
//                 }}
//                 InputLabelProps={{
//                     shrink: "true",
//                     style: {
//                       color: "#ffffff",
//                       fontSize: 20,
//                       borderBottom: "white",
//                       fontFamily: "arial"
//                     }
//                 }}
//             />
//         </div>
//     )
// }

// export default InputBox
import React, { useState } from "react";

import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";
import Typography from '@material-ui/core/Typography';

const code = ``;

const hightlightWithLineNumbers = (input, language) =>
  highlight(input, language)
    .split("\n")
    .map((line, i) => `<span class='editorLineNumber'>${i + 1}</span>${line}`)
    .join("\n");

function InputBox(props) {
  const [codeValue, setCodeValue] = useState(code);

  return (
    <div style={{height: '100%'}}>
        <Typography color="primary" variant="h6">&gt; {props.type}</Typography>
        <Editor
        value={codeValue}
        onValueChange={code => setCodeValue(code)}
        highlight={code => hightlightWithLineNumbers(code, languages.js)}
        padding={10}
        textareaId="codeArea"
        className="editor"
        style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 15,
            outline: 0,
            color: '#E8E6E3',
            overflow:'auto'
        }}
        />
    </div>
  );
}

export default InputBox;
