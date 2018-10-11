import React from 'react';
import {Typography, Grid, Button, withStyles} from "@material-ui/core";
import {Link} from "react-router-dom";
import {stylesIntro as styles} from './styles';

type Prop = {classes:{[name:string]:string}};
function Intro(props: Prop) {
    const {classes} = props;
    return (
        <div className={classes.root}>
            <Typography className={classes.title} variant="h1">
                Nian-Galaxy
            </Typography>
            <Typography className={classes.caption} variant="caption">
                Your peer-to-peer light social note manager app.
            </Typography>
            <Grid className={classes.buttons}
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  spacing={16}
            >
                <Grid item>
                    <Link to="/home">
                        <Button
                            className={classes.buttonEnter}
                            variant="contained"
                            color="secondary"
                        >
                            Enter
                        </Button>
                    </Link>
                </Grid>
                <Grid item className={classes.buttonDevPosition}>
                    <Link to="/dev">
                        <Button className={classes.buttonDev}>
                            dev
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
}

export default withStyles(styles)(Intro);