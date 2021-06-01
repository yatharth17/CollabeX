import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {useSelector,useDispatch} from 'react-redux'
import {setLanguage,setTheme} from '../Redux/actions/actions'
import { Themes, languages } from './Arrays'

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const lang = useSelector(state=>state.editorReducer.language);
  const theme = useSelector(state=>state.editorReducer.theme);
  const dispatch=useDispatch()
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    alert(`Form submitted by ${lang} ${theme}`)
    event.preventDefault()
    setOpen(false);
  };

  const langList = languages.map((lang)=>(
      <option key={lang.value} value={lang.value}>{lang.name}</option>
  ));

  const themeList = Object.keys(Themes).map(key => (
    <option key={key} value={key}>{Themes[key]}</option>
  ));

  return (
    <div>
      <Button variant="outlined" color="primary" style={{textTransform: 'none'}} onClick={handleClickOpen}>
        &lt;configure /&gt;
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Configure the Editor</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Language  </label>
              <select value={lang} onChange={(e) => dispatch(setLanguage(e.target.value))}>
                {langList}     
              </select>
            </div>
            <br />
            <div>
              <label>Theme </label>
              <select value={theme} onChange = {(e) => dispatch(setTheme(e.target.value))}>
                {themeList}
              </select>
            </div>
            <div>
              <Button type="Submit" style={{float: "right"}}> Save </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
