import React from "react";
import PropTypes from "prop-types";
import {UserContext} from "./user-context";

export default class UserProvider extends React.Component {//TODO:完善User功能
    static propTypes = {
        stateData: PropTypes.array.isRequired,
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