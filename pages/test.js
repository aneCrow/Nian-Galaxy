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

    render() {//TODO:将这个Consumer和参数控制做成高阶组件给其他page做简单的loading控制
        const {isPageDone}=this.props;
        return isPageDone?<div>empty test:{this.state.info}</div>:null
    }
}
export default withNian(Test);



const withConsumer =Component=>{
    return props => {
        return<LogContext.Consumer>
            {data=>
                <Component {...props} {...data}/>
            }
        </LogContext.Consumer>
    }
};