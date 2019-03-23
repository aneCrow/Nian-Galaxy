import React from "react";
import NianAPI from "../lib/NianAPI"

export default class Loading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allDone: false,
            loadInfo: 'test'
        };
    }
    componentDidMount() {
        const api = new NianAPI(window.DatArchive);
        api.setLoadDone = this.setDone;
        this.setState({isReady: true});
    }

    setDone = () => this.setState({allDone: true});
    logInfo = even => this.setState({loadInfo: even.info});

    render() {
        const {isReady, allDone, loadInfo} = this.state;
        const {children} = this.props;
        const logProvider = {
            allDone: allDone,
            setDone: this.setDone,
            logInfo: this.logInfo
        };
        //TODO:做是否存在用户和记本判断并给出快捷Link到目标url
        return <LoadContext.Provider value={logProvider}>
            {/*isReady之后载入页面模块以保证api正常载入*/}
            {isReady ? children : null}
            {allDone ? null : <div className="flex_center">
                <h1>loading</h1>
                {/*<p className="border flex_center">{loadingIcon}</p>*/}
                <p>{loadInfo}</p>
                <br/>
                <button onClick={this.setDone}>确认</button>{/*手动结束载入画面*/}
            </div>}
        </LoadContext.Provider>
    }
}
export const LoadContext = React.createContext({
                                                   allDone: false,
                                                   setDone: () => {},
                                                   logInfo: () => {}
                                               });