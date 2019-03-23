import React from 'react';
import PropTypes from "prop-types";

import {defaultUser, UserContext} from "../lib/context/user-context";
import {defaultTheme, ThemeContext} from "../lib/context/theme-context";

import Layout from "./Layout";

export default class StateProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: defaultTheme,
            user: defaultUser
        };
    }
    componentDidMount() {
    }

    onThemeChange = (theme = defaultTheme) => {
        this.setState({theme: theme});
    };
    onUserChange = (user = defaultUser) => {
        this.setState({user: user});
    };

    render() {
        const {children} = this.props;
        const {theme, user} = this.state;
        return <ThemeProvider stateData={theme} setStateData={this.onThemeChange}>
            <UserProvider stateData={user} setStateData={this.onUserChange}>
                {children}
            </UserProvider>
        </ThemeProvider>
    }
}

class ThemeProvider extends React.Component {//TODO:完善Theme功能
    static propTypes = {
        stateData: PropTypes.object.isRequired,
        setStateData: PropTypes.func.isRequired,
    };
    update = data => this.props.setStateData(data);
    toggleType = () => {

    };
    setColor = ({primary, secondary, background}) => {

    };

    render() {
        const {children, stateData} = this.props;
        const valueProvider = {
            theme: stateData,
            toggleType: this.toggleType,
            setColor: this.setColor
        };
        return <ThemeContext.Provider value={valueProvider}>
            <Layout>
                {children}
            </Layout>
        </ThemeContext.Provider>
    }
}

class UserProvider extends React.Component {//TODO:完善User功能
    static propTypes = {
        stateData: PropTypes.object.isRequired,
        setStateData: PropTypes.func.isRequired,
    };
    update = data => this.props.setStateData(data);
    createUser = () => {};
    editNotes = () => {};

    render() {
        const {children, stateData} = this.props;
        const valueProvider = {
            user: stateData,
            createUser: this.createUser,
            editNotes: this.editNotes
        };
        return <UserContext.Provider value={valueProvider}>
            {children}
        </UserContext.Provider>
    }
}