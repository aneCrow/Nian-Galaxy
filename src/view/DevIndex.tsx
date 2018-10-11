import React from 'react';
import {Route, Link, Switch, Redirect} from "react-router-dom";
import {AppBar, Tabs, Tab, Button, Typography, withStyles, WithStyles} from "@material-ui/core";
import {stylesDev as styles} from "./styles";

type State = {
    barValue: number | boolean,
}

class Dev extends React.Component<WithStyles<typeof styles>, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            barValue: false,
        };
        this.handleTabChange = this.handleTabChange.bind(this);
    }

    handleTabChange = (e: any, barValue: number | boolean) => {
        if (barValue === this.state.barValue) barValue = false;
        this.setState({barValue});

        let a: string;
        if (barValue === false) a = '';
        else a = '/' + barValue.toString();
        // @ts-ignore
        this.props.history.push('/dev' + (a));
    };

    render() {
        const {classes, match}: any = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Tabs value={this.state.barValue} onChange={this.handleTabChange}>
                        {/*独立的组件测试页面*/}
                        <Tab label="ThemeTool"/>
                        <Tab label="ThemeTool"/>
                        <Tab label="ThemeTool"/>
                    </Tabs>
                </AppBar>
                <Switch>
                    <Route exact path={'/dev'} render={(match) => defaultPage(match)}/>
                    <Route path={'/dev/:id'} component={idDiv}/>{/*假货*/}
                    <Redirect to={'/dev'}/>
                </Switch>
            </div>
        );
    }
}
export default withStyles(styles)(Dev);

const idDiv = ({match}: any) => (<Typography>{match.params.id}</Typography>);

const defaultPage = ({match}: any) => (
    <div>
        <p>施工中</p>
        <p>Under construction</p>
        <p>施工中</p>
        <p>Under construction</p>
        <Link to={`${match.url}/aaa`}>
            <Button>
                dev
            </Button>
        </Link>
    </div>
);