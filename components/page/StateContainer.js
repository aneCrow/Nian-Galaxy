import React from 'react';

import {defaultUser} from "./context/user-context";
import {defaultTheme} from "./context/theme-context";
import UserProvider from "./context/UserProvider";
import ThemeProvider from "./context/ThemeProvider";
import Loading from "./Loading";

export default class StateContainer extends React.Component {//TODO:出bug了，无限StateContainer constructor
    constructor(props) {
        super(props);
        this.state = {
            theme: defaultTheme,
            user: [defaultUser]
        };
        console.log('constructor %s',this.constructor.name);
    }
    onThemeChange = (theme = defaultTheme) => {
        if(JSON.stringify(this.state.theme)===JSON.stringify(theme))return;
        this.setState({theme: theme});
    };
    onUserChange = (user = defaultUser) => {
        if(JSON.stringify(this.state.user)===JSON.stringify(user))return;
        this.setState({user: user});
    };

    render() {
        const {children} = this.props;
        const {theme, user} = this.state;
        return <ThemeProvider stateData={theme} setStateData={this.onThemeChange}>
            <UserProvider stateData={user} setStateData={this.onUserChange}>
                <Loading stateData={{theme:theme,user:user}}
                         setTheme={this.onThemeChange}
                         setUser={this.onUserChange}
                >{/*做了渲染拦截，这个组件是第一次willMount的终点*/}
                    {children}
                </Loading>
            </UserProvider>
        </ThemeProvider>
    }
}