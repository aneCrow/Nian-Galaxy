import React from 'react';
import {Route, Link, Switch} from "react-router-dom";
import {AppBar, Tabs, Tab, Button, withStyles, WithStyles} from "@material-ui/core";
import {stylesDev as styles} from "./styles";
type State = {
    barValue:number|null,
}
type Props = {}
class Dev extends React.Component<WithStyles<typeof styles>,State>{
    // state = {
    //     some:''
    // };
    constructor(props:any){
        super(props);
        this.state={
            barValue: null,
        }
    }
    handleTabChange = (e:any,barValue:number|null) =>{
        if(barValue===this.state.barValue)barValue=null;
        this.setState({barValue});
    };
    defaultPage=()=>{
        return(
            <React.Fragment>
                <p>施工中</p>
                <p>Under construction</p>
                <p>施工中</p>
                <p>Under construction</p>
            </React.Fragment>
        );
    };
    render(){
        const {classes} = this.props;
        return(
            <div className={classes.root}>
                <AppBar position="static">
                    <Tabs value={this.state.barValue} onChange={this.handleTabChange}>
                        <Tab label="ThemeTool"/>
                        <Tab label="ThemeTool"/>
                        <Tab label="ThemeTool"/>
                    </Tabs>
                </AppBar>
                <Link to={`${this.props.match.url}/rendering`}>
                    <Button>
                        dev
                    </Button>
                </Link>
                <Route path={`${this.props.match.path}/:topicId`} render={()=><p>aa</p>} />
                <Route exact path={this.props.match.path} render={this.defaultPage}/>
            </div>
        );
    }
}
export default withStyles(styles)(Dev);