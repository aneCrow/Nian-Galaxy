import React from "react";
import PropTypes from "prop-types";

import {ThemeContext} from "./context/theme-context"

import style_Layout from "./style/Layout";
import style_Theme from "./style/Theme";

export default class Layout extends React.Component {
    static propTypes = {
        theme: PropTypes.objectOf().isRequired,
    };

    render() {
        const {children, theme} = this.props;
        return <div id="nian-layout" className="root flex_center">
            <div className="border flex_center">
                {children}
            </div>
            {/*<ThemeContext.Consumer>*/}
            {/*TODO:用Theme组件系统控制UI表现*/}
            {style_Layout()}
            {style_Theme(theme)}
            {/*</ThemeContext.Consumer>*/}
        </div>
    }
}


