import React from "react";
import App,{Container} from "next/app";

import {defaultTheme} from "../components/lib/context/theme-context";
import {defaultUser,UserContext} from "../components/lib/context/user-context";

import UITheme from "../components/page/UITheme";
import Loading from "../components/page/Loading";

export default class app extends App {
    state = {
        theme:defaultTheme,
        user:defaultUser
    };
    onThemeChange = (theme=defaultTheme) =>{
        this.setState({theme:theme});
    };
    onUserChange = (user=defaultUser) =>{
        this.setState({user:user});
    };
    render() {
        const {Component, pageProps}=this.props;
        const {theme,user}=this.state;
        const UI = UITheme({
            theme:theme,
            setTheme:this.onThemeChange
        });
        const userContext={
            user:user,
            createUser:this.onUserChange,
            editUser:this.onUserChange
        };
        return (
            <Container>
                <UI>
                    <UserContext.Provider value={userContext}>
                        <Loading>
                            <Component {...pageProps}/>
                        </Loading>
                    </UserContext.Provider>
                </UI>
            </Container>
        );
    }
}