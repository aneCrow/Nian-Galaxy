import React from 'react';
import {Route, Link, Switch, Redirect} from "react-router-dom";
import {Button, withStyles, WithStyles} from "@material-ui/core";
import {stylesDefault as styles} from "../styles";

type State = {}

class SetTheme extends React.Component<WithStyles<typeof styles>, State> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render() {
        const {classes}: any = this.props;
        return (
            <div className={classes.root}>
                settheme
            </div>
        )
    }
}

export default withStyles(styles)(SetTheme);