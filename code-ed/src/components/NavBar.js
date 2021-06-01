import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import FormDialog from './FormDialog';

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function ElevateAppBar(props) {

  const handleClick = () => {

  };

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar className="bar" style={{backgroundColor:"#1F1F1F"}}>
          <Toolbar >
            <Typography color="primary" style={{ flex:"1"}} variant="h6">&lt;code-it /&gt;</Typography>
            <Button variant="outlined" color="primary" style={{textTransform: 'none', marginRight: '10px'}} onClick = {handleClick}>&gt; Run</Button>
            <FormDialog></FormDialog>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}
