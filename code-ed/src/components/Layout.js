import React from 'react'
import CodeEditor from './CodeEditor'
import InputBox from './InputBox'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './NavBar'
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    sample: {
        height: "90vh",
        overflowX:"hidden",
        overflowY:"scroll"
    },
    sampleS: {
        height: "50%",
    },
  }));


function Layout() {
    
    const classes = useStyles();

    return (
        <div>
            <NavBar/>
            <Grid container spacing={3} direction="row" alignItems="stretch" className={classes.sample}>
                <Grid item xs={12} md={9}>
                    <CodeEditor></CodeEditor>
                </Grid>
                <Grid item container direction="row" spacing={2} xs={12} md={3} className={classes.sample}>
                    <Grid item xs={12} sm={6} md={12} className={classes.sampleS}>
                        <InputBox type="Input"></InputBox>
                    </Grid>
                    <Grid item xs={12} sm={6} md={12} className={classes.sampleS}>
                        <InputBox type="Output"></InputBox>
                    </Grid>
                </Grid>
            </Grid>
            
            <br />
        </div>
    )
}

export default Layout
