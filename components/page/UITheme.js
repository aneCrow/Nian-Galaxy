import React from "react";
import PropTypes from "prop-types";
import {ThemeContext} from "../lib/context/theme-context";
import Layout from "./Layout";

export default function UITheme({theme,setTheme}){
    return class extends React.Component {
        // propTypes = {
        //     children: PropTypes.element.isRequired,
        // };
        render() {
            const {children}=this.props;
            const themeContext={
                theme: theme,
                toggleType:setTheme,
                setColor:setTheme
            };
            return <ThemeContext.Provider value={themeContext}>
                <Layout>
                    {children}
                </Layout>
            </ThemeContext.Provider>
        }
    }
}