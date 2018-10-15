import React from 'react';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core';
import {appTheme,StoryState} from './redux/initialState';
import 'typeface-roboto';
import {setTheme} from "./redux/actions";
import {connect} from "react-redux";

type Props = {
    appTheme: undefined|appTheme;
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
export default connect(
    mapStateToProps
    // mapDispatchToProps
)(MaterialUI)