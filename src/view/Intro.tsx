import React from 'react';
import {Typography, Grid, Button, withStyles} from "@material-ui/core";
import {Link} from "react-router-dom";
import {stylesIntro as styles} from './styles';
// @ts-ignore
import classNames from 'classnames';

type Prop = { classes: { [name: string]: string } };

function Intro(props: Prop) {
    const {classes} = props;
    return (
        <div className={classes.root}>
            <Typography
                className={classNames(classes.titles, classes.title)}
                variant="h1"
                noWrap
            >
                Nian-Galaxy
                <Typography className={classNames(classes.key,classes.key1)} variant="caption">
                    Peer-to-Peer
                </Typography>
                <Typography className={classNames(classes.key,classes.key2)} variant="caption">
                    light
                </Typography>
                <Typography className={classNames(classes.key,classes.key3)} variant="caption">
                    Social Feed
                </Typography>
                <Typography className={classes.caption} variant="caption" noWrap>
                    A note manager app what fully under control whit yourself.
                </Typography>
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