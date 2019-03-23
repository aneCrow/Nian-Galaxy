import React from "react";
import PropTypes from "prop-types";
import {ThemeContext} from "./theme-context";
import Layout from "../StateContainer";

export default class ThemeProvider extends React.Component {//TODO:完善Theme功能
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
            <Layout theme={stateData}>
                {children}
            </Layout>
        </ThemeContext.Provider>
    }
}