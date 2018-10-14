import React from 'react';
import {Route, Link, Switch, Redirect} from "react-router-dom";
import {Card, CardContent, CardActions, Button, Typography, withStyles, WithStyles} from "@material-ui/core";
import {stylesDev as styles} from "./styles";
import DevNavBar, {navIndex} from './Components/DevNavBar';
import SetTheme from './Components/SetTheme';

type State = {
    barValue: number | boolean,
    selectedIndex: navIndex,
    routeIndex: any,
}

class Dev extends React.Component<WithStyles<typeof styles>, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            barValue: false,
            selectedIndex: {barIndex: 0, tabIndex: false},
            routeIndex: {}
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
    setBarIndex = (i: navIndex) => {
        this.setState({selectedIndex: i});
    };

    render() {
        const {classes, match}: any = this.props;
        const {selectedIndex}: any = this.state;
        return (
            <div className={classes.root}>
                <DevNavBar
                    selectedIndex={selectedIndex}
                    setBarIndex={this.setBarIndex}
                    classes={undefined}
                />
                <Switch>
                    <Route exact path={`${match.path}`} component={defaultPage}/>
                    <RouteMap match={match} classes={classes}/>
                    <Redirect to={`${match.path}`}/>
                </Switch>
            </div>
        );
    }
}

export default withStyles(styles)(Dev);

const RouteMap = ({match, classes}: any) => {
    return (
        <React.Fragment>
            {DevContains.map((valueb: any, indexb: number) => {
                return (
                    <Route
                        path={`${match.path}/${valueb.title}`}
                        key={indexb}
                        render={({match}) => (
                            <Switch>
                                <Route exact path={`${match.path}`} render={({match}) => {
                                    return defaultPage({match});
                                }}/>
                                {valueb.items.map((valuet: any, indext: number) => {
                                    let checkComponent: boolean = false;
                                    if (valuet.component) checkComponent = true;//TODO 细化目标组件检查
                                    return (
                                        <RouteItem exact
                                                   path={`${match.path}/${valuet.name}`}
                                                   key={indext}
                                                   classes={classes}
                                                   indexPath={[indexb, indext]}
                                                   component={(checkComponent ? valuet.component : errorPage)}
                                        />
                                    )}
                                )}
                                <Redirect to={`${match.path}`}/>
                            </Switch>
                        )}
                    />
                )}
            )}
        </React.Fragment>
    );
};

//包装route，增加属性传递
const RouteItem = ({component: Component, indexPath: indexPath, classes: classes, ...rest}: any) => (
    <Route {...rest} render={props => (
        <Component indexPath={indexPath} classes={classes} {...props}/>
    )}/>
);
const errorPage = ({...props}) => {
    const {classes, match, indexPath}: any = props;
    const title = DevContains[indexPath[0]].title;
    const name = DevContains[indexPath[0]].items[indexPath[1]].name;
    return (
        <Card className={classes.errorCard}>
            <CardContent>
                <Typography variant="h4" color='secondary'>{title} {name}</Typography>
                <Typography variant="caption">path: ...{match.url}</Typography>
                <Typography variant="caption">barIndex:{indexPath[0]} , tabIndex:{indexPath[1]}</Typography>
                <Typography variant="title">target conmponent</Typography>
                <Typography variant="body1">'undefinded'</Typography>
            </CardContent>
        </Card>
    )
};
const defaultPage = ({...props}) => {
    const {match}: any = props;
    return (
        <Card style={{margin: 'auto'}}>
            <CardContent>
                <Typography variant="h4">Dev Page</Typography>
                <Typography variant="caption">path: ...{match.url}</Typography>
                <Typography variant="title">select a target</Typography>
                <Typography variant="body1">get testing component</Typography>
                <CardActions>
                    <Link to={'/'}>
                        <Button variant='fab' color='secondary'>
                            Home
                        </Button>
                    </Link>
                </CardActions>
            </CardContent>
        </Card>
    )
};

export const DevContains = [
    {
        title: 'components',
        items: [
            {
                name: 'SetTheme',
                component: SetTheme
            },
            {
                name: 'test',
                component: null
            },
        ]
    },
    {
        title: 'pages',
        items: [
            {
                name: 'test',
                component: null
            },
            {
                name: 'test',
                component: null
            },
            {
                name: 'test',
                component: null
            },
            {
                name: 'test',
                component: null
            },
            {
                name: 'test',
                component: null
            },
            {
                name: 'test',
                component: null
            },
            {
                name: 'test',
                component: null
            },
            {
                name: 'test',
                component: null
            },
            {
                name: 'test',
                component: null
            },
            {
                name: 'test',
                component: null
            },
            {
                name: 'test',
                component: null
            },
            {
                name: 'test',
                component: null
            },
            {
                name: 'test',
                component: null
            },
            {
                name: 'test',
                component: null
            },
            {
                name: 'test',
                component: null
            },
            {
                name: 'test',
                component: null
            }
        ]
    }
];