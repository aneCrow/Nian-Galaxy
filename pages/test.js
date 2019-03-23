import React from "react";
import {LoadContext} from "../components/page/Loading";
import NianAPI from "../components/lib/NianAPI";


export default class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {info: '其他页面和功能还没准备好'};
        console.log('loaded %s',this.constructor.name);
    }


    componentDidMount() {
        console.log('loaded %s',this.constructor.name);
        // const api = NianAPI.instance;
        // console.dir(api);
    }

    render() {//TODO:将这个Consumer和参数控制做成高阶组件给其他page做简单的loading控制
        return <LoadContext.Consumer>{
            ({allDone,setDone,logInfo}) =>
                allDone ?
                <div>empty test:{this.state.info}</div> :
                null
        }</LoadContext.Consumer>
    }
}

// export default props => <LogContext.Consumer>
//     {({logInfo}) => <Test {...props} logFn={logInfo}/>}
// </LogContext.Consumer>