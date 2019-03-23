import React from "react";
import PropTypes from "prop-types";

import NianAPI from "../components/lib/NianAPI";

import {LoadConsumer} from "../components/page/Loading";

class Test extends React.Component {
    static propTypes = {
        allDone: PropTypes.bool.isRequired,
        setDone: PropTypes.func.isRequired,
        logInfo: PropTypes.func.isRequired
    };
    constructor(props) {
        super(props);
        this.state = {info: '其他页面和功能还没准备好'};
        console.dir(this.componentDidMount);
    }


    componentDidMount() {
        console.log('loaded %s',this.constructor.name);
        // const api = NianAPI.instance;
        // console.dir(api);
    }

    render() {//TODO:将这个Consumer和参数控制做成高阶组件给其他page做简单的loading控制
        const {allDone}=this.props;
        return allDone ?
                <div>empty test:{this.state.info}</div> :
                <div> </div>
    }
}
export default LoadConsumer(Test);