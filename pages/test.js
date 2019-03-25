import React from "react";
import PropTypes from "prop-types";

import NianAPI from "../components/lib/NianAPI";

import {LoadConsumer} from "../components/page/Loading";
import withNian, {LogContext} from "../components/withNian";

class Test extends React.Component {
    static propTypes = {
    };
    constructor(props) {
        super(props);
        this.state = {info: '其他页面和功能还没准备好'};
        console.dir(this.componentDidMount);
    }


    componentDidMount() {
        console.log('%s in ComponentDidMount',this.constructor.name);
        setTimeout(this.props.setPageDone,1000);
    }

    render() {
        const {isPageDone}=this.props;
        return isPageDone?<div>empty test:{this.state.info}</div>:null
    }
}
export default withNian(Test);