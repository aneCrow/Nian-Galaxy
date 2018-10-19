import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core';
import {StoryState,appTheme} from './redux/initialState';
import 'typeface-roboto';
import {setTheme} from "./redux/actions";

type Props = {
    appTheme: appTheme;
}

//Material UI装饰根组件
class MaterialUI extends React.Component<Props> {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <MuiThemeProvider theme={createMuiTheme(this.props.appTheme)}>
                <CssBaseline/>
                {this.props.children}
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = (state:StoryState) =>({
    appTheme:state.theme
});
const mapDispatchToProps = (dispatch:any) =>({
    // setTheme: (theme:appTheme) => dispatch(setTheme(theme))
});
// @ts-ignore
export default  withRouter(connect(mapStateToProps)(MaterialUI))