import React from 'react';
import {Button, CardActions, withStyles, WithStyles} from "@material-ui/core";
import {stylesDefault as styles} from "../styles";
import {appPalette, appTheme, StoryState} from "../../redux/initialState";
import {setPalette} from "../../redux/actions";
import {connect} from "react-redux";
import {navIndex} from "./DevNavBar";
import {Link} from "react-router-dom";

interface Props extends WithStyles<typeof styles> {
    setPalette(theme:appTheme):void;
    appTheme:appTheme;
}

class SetTheme extends React.Component<Props> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }
    handleSetTheme = () =>{
        this.props.setPalette({palette:{type:'light'}});
    };
    handleSetThemeB = () =>{
        this.props.setPalette({palette:{type:'dark'}});
    };
    render() {
        const {classes}: any = this.props;
        return (
            <div className={classes.root}>
                <Link to={'/'}>
                    <Button variant='contained' color='secondary'>
                        Home
                    </Button>
                </Link>
                <Button variant='contained' onClick={this.handleSetTheme}>light</Button>
                <Button variant='contained' onClick={this.handleSetThemeB}>dark</Button>
            </div>
        )
    }
}
const mapStateToProps = (state:StoryState) =>({
    appTheme:state.theme
});
const mapDispatchToProps = (dispatch:any) =>({
    setPalette: (theme:appTheme) => dispatch(setPalette(theme))
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(SetTheme));